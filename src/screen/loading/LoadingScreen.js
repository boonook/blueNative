/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {NavigationActions} from "react-navigation";
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { observer, inject } from "mobx-react";

@inject(["authStore"]) // 注入对应的store
@observer // 监听当前组件
export default class LoadingScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title:'loading'
        }
    }

    componentDidMount() {

    }

    goConnectBluetoothPage=()=>{
        this.props.navigation.reset([NavigationActions.navigate({ routeName: 'connectBluetooth' })]);
    }

    render(){
        return (
            <View style={styles.loadingScreen}>
                <StatusBar hidden={true} backgroundColor="#fff" barStyle="light-content" />
                <SafeAreaView style={styles.loadingScreenContent}>
                    <TouchableOpacity  onPress={()=>{
                        this.goConnectBluetoothPage();
                    }}>
                        <View>
                            <Text style={styles.btn}>跳转</Text>
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loadingScreen:{
        flex:1,
        flexDirection: 'column',
        backgroundColor:'#eee'
    },
    loadingScreenContent:{
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
