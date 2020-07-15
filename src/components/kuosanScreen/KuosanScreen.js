import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    Easing,
    Text
} from 'react-native';
export default class KuosanScreen extends Component {
    constructor(props) {  //构造函数
        super(props);
        this.spinValue = new Animated.Value(0); //使用 Animated.Value 声明了一个 spinValue 变量，并传了一个 0 作为初始值。
    }

    componentDidMount() {
        this.spin();    //app加载后运行动画
    }

    spin() {
        this.spinValue.setValue(0);   //重置为0
        Animated.timing( //并驱动 this.spinValue 的值以 Easing.linear 的动画方式在 4000 毫秒从 0 变成 1。
            this.spinValue,
            {
                useNativeDriver:false,
                toValue: 1,
                duration: 800,
                easing: Easing.linear
            }
        ).start(() => { this.spin() }); //调用 start()，并将 this.spin 作为回调传递给 start，它将在(一次)动画完成之后调用，这也是创建无穷动画的一种基本方式。
    }
    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: [8, 16]
        });
        const alph = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(227,111,83,1)', 'rgba(227,111,83,0)'],
        });
        return (
            <View style={styles.container}>
                <Animated.View
                    style={{
                        width: spin,
                        height: spin,
                        borderWidth: 2,
                        borderColor: alph,
                        borderRadius: spin,
                        backgroundColor: alph,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >

                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width:16,
        height:16,
        marginLeft:-4,
        marginTop:-4
    },

});
