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
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { observer, inject } from "mobx-react";
import {Button,Icon} from '@ant-design/react-native'

@inject(["authStore"]) // 注入对应的store
@observer // 监听当前组件
export default class SmartPillowScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title:'智能枕头'
        }
    }

    componentDidMount() {

    }

    render(){
        return (
            <>
                <StatusBar hidden={true} backgroundColor="#fff" barStyle="light-content" />
                <SafeAreaView>
                    <View>
                        <Text>智能整头</Text>
                        <Button>智能整头</Button>
                        <Icon name="account-book" size="md" color="red" />
                    </View>
                </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});
