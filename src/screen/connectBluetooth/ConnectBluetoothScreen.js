import React,{Component} from 'react';
import { observer, inject } from "mobx-react";
import {NavigationActions} from "react-navigation";
import {
    ScrollView,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar, TouchableOpacity,NativeModules
} from 'react-native';
import BluetoothSetting from '../../components/bluetoothSettingScreen/BluetoothSettingScreen'

@inject(["authStore"]) // 注入对应的store
@observer // 监听当前组件
export default class ConnectBluetoothScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title:'连接',
            data:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
            isConnecting:false,///蓝牙是否连接
            bluetoothState:false///蓝牙打开状态
        }
    }

    componentDidMount() {

    }



    goHomePage=()=>{
        this.props.navigation.reset([NavigationActions.navigate({ routeName: 'home' })]);
    }

    render(){
        return (
            <View style={styles.connectBluetooth}>
                <StatusBar hidden={true} backgroundColor="#fff" barStyle="light-content" />
                <SafeAreaView style={styles.connectBluetoothContent}>
                    <View style={styles.connectBluetoothContentTitle}>
                        <Text style={styles.title}>艾萌未来</Text>
                        <View style={styles.titleDec}>
                            <Text style={styles.titleDecText}>Mini医疗机器人</Text>
                        </View>
                        <View style={styles.listTitle}>
                            <Text>发现设备</Text>
                        </View>
                    </View>
                    <BluetoothSetting  style={styles.connectBluetoothContentList}/>
                    <View style={styles.btnBox}>
                        <TouchableOpacity  onPress={()=>{
                            this.goHomePage();
                        }}>
                            <View style={styles.btn}>
                                <Text style={styles.btnTitle}>蓝牙链</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    connectBluetooth:{
        flex:1,
        width:'100%',
        flexDirection: 'column',
        backgroundColor:'#eee'
    },
    connectBluetoothContentTitle:{
        width:'100%',
        textAlign:'center',
        flexDirection: 'column',
        alignItems:'center',
    },
    title:{
      fontSize:20
    },
    titleDec:{
        marginRight:-160,
        paddingTop:10,
    },
    titleDecText:{
        color:'#999'
    },
    listTitle:{
        width:'100%',
        alignItems:'center',
        borderStyle:'solid',
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        paddingTop:20,
        paddingBottom:20
    },
    connectBluetoothContent:{
        flex:1,
        width:'100%',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center'
    },
    connectBluetoothContentList:{
        flex:1,
        width:'100%',
    },
    connectBluetoothContentListItem:{
        paddingTop:15,
        paddingBottom:15
    },
    btnBox:{
        width:'100%',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:30,
        borderStyle:'solid',
        borderTopWidth:1,
        borderTopColor:'#ddd'
    },
    btn:{
        backgroundColor:'#999',
        borderRadius:5
    },
    btnTitle:{
        color:'#fff',
        lineHeight:40,
        height:40,
        textAlign:'center',
    }
});
