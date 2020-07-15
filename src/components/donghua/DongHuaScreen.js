import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    Easing
} from 'react-native';
export default class DongHuaScreen extends Component {
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
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => { this.spin() }); //调用 start()，并将 this.spin 作为回调传递给 start，它将在(一次)动画完成之后调用，这也是创建无穷动画的一种基本方式。
    }
    render() {
        //创建了一个 spin 变量，并调用了 this.spinValue 的 interpolate 方法。
        //interpolate 方法可以在任何一个 Animated.Value 返回的实例上调用，该方法会在属性更新之前插入一个新值，如将 0~1 映射到 1~10。
        //在我们的demo中，利用 interpolate 方法将数值 0~1 映射到了 0deg~360deg。我们传递了 inputRange 和 outputRange 参数给interpolate 方法，并分别赋值为[0, 1] 和 & [‘0deg’, ‘360deg’]。
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return (
            <View style={styles.container}>
                <Animated.Image
                    style={{
                        width: 227,
                        height: 200,
                        transform:[{rotate:spin}]
                    }}
                    source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },

});
