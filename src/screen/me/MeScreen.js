/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar, TouchableOpacity,
} from 'react-native';
import { observer, inject } from "mobx-react";
import {NavigationActions} from "react-navigation";

@inject(["authStore"]) // 注入对应的store
@observer // 监听当前组件
export default class MeScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title:'我的'
        }
    }

    componentDidMount() {

    }

    goConnectBluetoothPage=()=>{
        // this.props.navigation.openDrawer();
        this.props.navigation.reset([NavigationActions.navigate({ routeName: 'connectBluetooth' })]);
    }

    render(){
        return (
            <View style={styles.meScreen}>
                <StatusBar hidden={true} backgroundColor="#eee" barStyle="light-content" />
                <SafeAreaView style={styles.meScreenContent}>
                   <View>
                       <TouchableOpacity  onPress={()=>{
                           this.goConnectBluetoothPage();
                       }}>
                            <Text style={styles.btn}>蓝牙连接设置</Text>
                       </TouchableOpacity>
                   </View>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    meScreen:{
        flex:1,
        flexDirection: 'column',
        backgroundColor:'#eee'
    },
    meScreenContent:{
        flex:1,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center'
    },
    btn:{
        borderWidth:1,
        borderColor:'#999',
        borderStyle:'solid',
        height:40,
        lineHeight:40,
        textAlign:'center',
        width:120,
        borderRadius:5
    }
});
