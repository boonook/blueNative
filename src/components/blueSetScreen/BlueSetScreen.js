import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    NativeEventEmitter,
    NativeModules,
    Platform,
    PermissionsAndroid,
    ScrollView,
    AppState,
    FlatList,
    Dimensions,
    Button,
    SafeAreaView
} from 'react-native';
import BleManager from 'react-native-ble-manager';
const window = Dimensions.get('window');
const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

export default class BlueSetScreen extends Component {
    constructor() {
        super()
        this.state={
            list:[{name:'boonook'},{name:'boonook2'},{name:'boonook3'}],
            scanning:false,
            peripherals: new Map(),
            appState: ''
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleDisconnectedPeripheral=(data)=>{
        let peripherals = this.state.peripherals;
        let peripheral = peripherals.get(data.peripheral);
        if (peripheral) {
            peripheral.connected = false;
            peripherals.set(peripheral.id, peripheral);
            this.setState({peripherals});
        }
        console.log('Disconnected from ' + data.peripheral);
    }

    handleUpdateValueForCharacteristic=(data)=>{
        console.log('Received data from ' + data.peripheral + ' characteristic ' + data.characteristic, data.value);
    }

    handleStopScan=()=>{
        console.log('Scan is stopped');
        this.setState({ scanning: false });
    }

    startScan=()=>{
        if (!this.state.scanning) {
            //this.setState({peripherals: new Map()});
            BleManager.scan([], 3, true).then((results) => {
                console.log('Scanning...');
                this.setState({scanning:true});
            });
        }
    }

    renderItem=(item)=>{
        let color = item.connected ? 'orange' : '#fff';
        return (
            <TouchableHighlight onPress={() => this.test(item) }>
                <View style={[styles.row, {backgroundColor: color}]}>
                    <Text style={{fontSize: 12, textAlign: 'center', color: '#333333', padding: 10}}>{item.name}</Text>
                    <Text style={{fontSize: 10, textAlign: 'center', color: '#333333', padding: 2}}>RSSI: {item.rssi}</Text>
                    <Text style={{fontSize: 8, textAlign: 'center', color: '#333333', padding: 2, paddingBottom: 20}}>{item.id}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={{margin: 10}}>
                        <Button title={'连接蓝牙/关闭蓝牙'} onPress={() => this.startScan() }/>
                    </View>
                    <View style={{margin: 10}}>
                        <Button title={'搜索可连接设备'} />
                    </View>
                    <ScrollView style={styles.scroll}>
                        {(this.state.list.length === 0) &&
                            <View style={{flex:1, margin: 20}}>
                                <Text style={{textAlign: 'center'}}>No peripherals</Text>
                            </View>
                        }
                        <FlatList
                            data={this.state.list}
                            renderItem={({ item }) =>this.renderItem(item)}
                            keyExtractor={item => item.id}
                        />
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        width: window.width,
        height: window.height
    },
    scroll: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    row: {

    },
});

