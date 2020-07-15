import React from 'react';
import {StyleSheet,Dimensions } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from './screen/loading/LoadingScreen';
import ConnectBluetoothScreen from './screen/connectBluetooth/ConnectBluetoothScreen'
import HomeScreen from './screen/home/HomeScreen';
import SmartPillowScreen from './screen/smartPillow/SmartPillowScreen';
import MarketScreen from './screen/market/MarketScreen';
import MeScreen from './screen/me/MeScreen';
import DrawerScreen from './screen/drawer/DrawerScreen';
import SettingScreen from './screen/setting/SettingScreen';
const {width} =  Dimensions.get('window');
const other = {
    connectBluetooth:{
        screen:ConnectBluetoothScreen
    }
}

/**
 * 普通用户的底部导航
 * **/
const appTabNavigator = createBottomTabNavigator({
    home:{
        screen:HomeScreen,
        navigationOptions: () => ({
            tabBarLabel: 'mini机器人',
        })
    },
    smartPillow:{
        screen:SmartPillowScreen,
        navigationOptions: () => ({
            tabBarLabel: '智能枕头',
        })
    },
    market:{
        screen:MarketScreen,
        navigationOptions: () => ({
            tabBarLabel: '商城',
        })
    },
    me:{
        screen:MeScreen,
        navigationOptions: () => ({
            tabBarLabel: '我的',
        })
    }
},{
    initialRouteName: 'home',
    tabBarPosition: 'bottom',
    lazy: false,//懒加载
    swipeEnabled: false,
    tabBarOptions: {
        activeTintColor: '#333',
        style: {
            backgroundColor: '#fff',
        },
    }
});

const DrawerNavigator =  createDrawerNavigator({
    home:{
        screen:appTabNavigator
    },
    setting:{
        screen:SettingScreen,
        navigationOptions: {
            drawerLabel:'setting'
        }
    }
},{
    initialRouteName: 'home',
    drawerWidth:  width, // 展示的宽度
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentComponent: props => (<CustomDrawerContentComponent {...props} />)
});

const CustomDrawerContentComponent = props => {
    return (
        <DrawerScreen props={props}/>
    )
};

const  StackNavigator = createStackNavigator({
    loading:{
        screen:LoadingScreen,
    },
    home:{
        screen:DrawerNavigator,
    },
    ...other
},{
    headerMode: 'none',
    headerBackTitleVisible: false,
    initialRouteName:'loading'
});

const styles = StyleSheet.create({
    tabBarImage: {
        width: 24,
        height: 24,
    },
    btnStyle: {
        height: 45,
        width: width-100,
        justifyContent: "center",
        margin: 1,
        backgroundColor: "#fff",
        paddingLeft:20,
        lineHeight:45,
    },
});

const Router = createAppContainer(StackNavigator);
export default Router;
