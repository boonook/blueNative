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
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { observer, inject } from "mobx-react";
import BlueSetScreen from '../../components/blueSetScreen/BlueSetScreen'

@inject(["authStore"]) // 注入对应的store
@observer // 监听当前组件
export default class MarketScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title:'商城'
        }
    }

    componentDidMount() {

    }

    render(){
        return (
            <View style={styles.markeBox}>
                <StatusBar hidden={true} backgroundColor="#fff" barStyle="light-content" />
                <SafeAreaView style={styles.markeBoxContent}>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <BlueSetScreen style={{flex:1}}/>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    markeBox:{
        flex:1,
        flexDirection:'column',
    },
    markeBoxContent:{
        flex:1,
    }
});
