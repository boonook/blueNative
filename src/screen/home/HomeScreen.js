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
    Image,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Easing,
} from 'react-native';
import { observer, inject } from "mobx-react";
import Echarts from '../../components/echarts/EchartsScreen';
import KuosanScreen from '../../components/kuosanScreen/KuosanScreen'
@inject(["authStore"]) // 注入对应的store
@observer // 监听当前组件
export default class HomeScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title:'首页',
            wenShiOption:{
                    //图形位置样式
                    grid:{
                        right:15,
                        bottom:30,
                    },
                    //点击图形某个位置的显示弹框
                    tooltip: {
                        trigger:'axis',
                    },
                    toolbox:{
                        orient:'vertical',
                        show:true,
                        showTitle:true,
                        feature:{
                            magicType:{
                                type: 'bar',
                            },
                        },
                    },
                    xAxis: [
                        {
                            axisLine:{
                              show:false,///不显示坐标线
                            },
                            axisTick:{
                                show:false,///线显示坐标上的刻度线
                                alignWithLabel:true,
                            },
                            data: ["0","01", "02", "03", "04", "05", "06","07"],
                            offset:10,
                        }
                    ],
                    yAxis: [
                        {
                            axisLine: {
                                show: false,///不显示坐标线,
                                onZero: true,
                                lineStyle: {
                                    color: '#376dde'
                                },
                            },
                            splitLine:{
                              show:false
                            },
                            axisTick:{
                                show:false,
                                alignWithLabel:false,
                            },
                            nameLocation:'end',
                            nameTextStyle:{
                                color:'#376dde',
                                fontSize:12,
                                align:'center',
                                padding:[0,0,0,30],
                                left:10,
                            },
                            interval:0,//强制分割间隔
                            nameGap:15,
                            name:'温湿度                ',
                            offset:-30,
                        }
                    ],
                    color:['#e62129','#007aff'],
                    //数据配置
                    series: [
                        {
                            name: '访客数量',
                            type: 'line',
                            smooth: true,
                            itemStyle:{
                                normal:{
                                    color:'#376dde', //折点颜色
                                    lineStyle:{
                                        color:'#ff9c35' //折线颜色
                                    }
                                }
                            },
                            data:[null, "53", "24", "6", "100", "20",'30'],
                        },
                        {
                            name: '访客数量',
                            type: 'line',
                            smooth: true,
                            min: 0,
                            max: 8,
                            splitNumber:8,
                            itemStyle:{
                                normal:{
                                    color:'#ea498d', //折点颜色
                                    lineStyle:{
                                        color:'#ea498d' //折线颜色
                                    }
                                }
                            },
                            data:[null, "20", "6", "36", "80", "30",'40'],
                        }
                    ]
            },
            option: {
                //图形位置样式
                grid:{
                    right:15,
                    bottom:30,
                },
                //点击图形某个位置的显示弹框
                tooltip: {
                    trigger:'axis',
                },
                toolbox:{
                    orient:'vertical',
                    show:true,
                    showTitle:true,
                    feature:{
                        magicType:{
                            type: 'bar',
                        },
                    },
                },
                xAxis: [
                    {
                        axisLine:{
                            show:false,///不显示坐标线
                        },
                        axisTick:{
                            show:false,///线显示坐标上的刻度线
                            alignWithLabel:true,
                        },
                        data: ["0","01", "02", "03", "04", "05", "06","07"],
                        offset:10,
                    }
                ],
                yAxis: [
                    {
                        axisLine: {
                            show: false,///不显示坐标线,
                            onZero: true,
                            lineStyle: {
                                color: '#376dde'
                            },
                        },
                        splitLine:{
                            show:false
                        },
                        axisTick:{
                            show:false,
                            alignWithLabel:false,
                        },
                        nameLocation:'end',
                        nameTextStyle:{
                            color:'#376dde',
                            fontSize:12,
                            align:'center',
                            padding:[0,0,0,30],
                            left:10,
                        },
                        interval:0,//强制分割间隔
                        nameGap:15,
                        name:'温湿度                ',
                        offset:-30,
                    }
                ],
                color:['#e62129','#007aff'],
                //数据配置
                series: [
                    {
                        name: '访客数量',
                        type: 'line',
                        smooth: true,
                        itemStyle:{
                            normal:{
                                color:'#376dde', //折点颜色
                                lineStyle:{
                                    color:'#ff9c35' //折线颜色
                                }
                            }
                        },
                        data:[null, "53", "24", "6", "100", "20",'30'],
                    },
                    {
                        name: '访客数量',
                        type: 'line',
                        smooth: true,
                        min: 0,
                        max: 8,
                        splitNumber:8,
                        itemStyle:{
                            normal:{
                                color:'#ea498d', //折点颜色
                                lineStyle:{
                                    color:'#ea498d' //折线颜色
                                }
                            }
                        },
                        data:[null, "20", "6", "36", "80", "30",'40'],
                    }
                ]
            },
            height:200,
            activeItem:1
        }
    }

    componentDidMount() {

    }

    onClickTabs=(data)=>{
        this.setState({
            activeItem:data
        })
    }

    render(){
        return (
            <ScrollView>
                <View style={styles.homeBox}>
                    <StatusBar hidden={true} backgroundColor="#fff" barStyle="light-content" />
                    <SafeAreaView style={styles.homeBoxContent}>
                        <View style={styles.echartsBox}>
                           <Echarts option={this.state.wenShiOption} height={this.state.height}/>
                        </View>
                        <View style={styles.echartsBox}>
                            <Echarts option={this.state.option} height={this.state.height}/>
                        </View>
                        <View style={styles.homeBoxImgBox}>
                            <View>
                                <Image style={[styles.homeBoxImg]} source={require('../../assets/images/rentiQiGuan.png')}></Image>
                            </View>
                            <View style={[styles.redPoint,styles.redPoint1]}>{this.state.activeItem+''==='1'?<KuosanScreen style={styles.kuosan}/>:<View style={styles.redPointView}></View>}</View>
                            <View style={[styles.redPoint,styles.redPoint2]}>{this.state.activeItem+''==='2'?<KuosanScreen style={styles.kuosan}/>:<View style={styles.redPointView}></View>}</View>
                            <View style={[styles.redPoint,styles.redPoint3]}>{this.state.activeItem+''==='2'?<KuosanScreen style={styles.kuosan}/>:<View style={styles.redPointView}></View>}</View>
                            <View style={[styles.redPoint,styles.redPoint4]}>{this.state.activeItem+''==='3'?<KuosanScreen style={styles.kuosan}/>:<View style={styles.redPointView}></View>}</View>
                        </View>
                        <View style={styles.tabBox}>
                            <View style={[styles.tabBoxItem,this.state.activeItem+''==='1'?styles.tabBoxItemActive:'']}>
                                <TouchableOpacity style={styles.tabBoxItemBtn} onPress={()=>this.onClickTabs(1)}>
                                    <Text>口气检测</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.tabBoxItem,this.state.activeItem+''==='2'?styles.tabBoxItemActive:'']}>
                                <TouchableOpacity style={styles.tabBoxItemBtn} onPress={()=>this.onClickTabs(2)}>
                                    <Text>腋下检测</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.tabBoxItem,this.state.activeItem+''==='3'?styles.tabBoxItemActive:'']}>
                                <TouchableOpacity style={styles.tabBoxItemBtn} onPress={()=>this.onClickTabs(3)}>
                                    <Text>下体检测</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {this.state.activeItem+''==='1'?<View style={styles.tabBoxDec}>
                            <Text style={styles.tabBoxDecItem}><Text>口气健康指数</Text><Text>90%</Text></Text>
                            <Text style={styles.tabBoxDecItem}><Text>口气健康指数</Text><Text>90%</Text></Text>
                            <Text style={styles.tabBoxDecItem}><Text>口气健康指数</Text><Text>90%</Text></Text>
                            <Text style={styles.tabBoxDecItem}><Text>口气健康指数</Text><Text>90%</Text></Text>
                        </View>:null}
                        {this.state.activeItem+''==='2'?<View style={styles.tabBoxDec}>
                            <Text style={styles.tabBoxDecItem}><Text>腋下健康指数</Text><Text>90%</Text></Text>
                            <Text style={styles.tabBoxDecItem}><Text>腋下健康指数</Text><Text>90%</Text></Text>
                            <Text style={styles.tabBoxDecItem}><Text>腋下健康指数</Text><Text>90%</Text></Text>
                            <Text style={styles.tabBoxDecItem}><Text>腋下健康指数</Text><Text>90%</Text></Text>
                        </View>:null}
                        {this.state.activeItem+''==='3'?<View style={styles.tabBoxDec}>
                            <Text style={styles.tabBoxDecItem}><Text>下体健康指数</Text><Text>90%</Text></Text>
                            <Text style={styles.tabBoxDecItem}><Text>下体健康指数</Text><Text>90%</Text></Text>
                            <Text style={styles.tabBoxDecItem}><Text>下体健康指数</Text><Text>90%</Text></Text>
                            <Text style={styles.tabBoxDecItem}><Text>下体健康指数</Text><Text>90%</Text></Text>
                        </View>:null}
                    </SafeAreaView>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    homeBox:{

    },
    homeBoxContent:{
        // flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    echartsBox:{
        width:'80%',
    },
    homeBoxImgBox:{
        width:'80%',
        borderBottomWidth:1,
        borderStyle:'solid',
        borderBottomColor:'#999',
        textAlign:'center',
        marginTop:20,
        marginLeft:15,
        marginRight:15,
        flexDirection: 'column',
        alignItems: 'center',
        position:'relative'
    },
    homeBoxImg:{
        height:150,
        width:100,
    },
    tabBox:{
        width:'80%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    tabBoxItem:{
        flex:1,
        textAlign:'center',
        height:40,
        lineHeight:40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        color:'#999'
    },
    tabBoxItemActive:{
        backgroundColor:'orange',
    },
    tabBoxDec:{
        paddingTop:20
    },
    tabBoxDecItem:{
        height:24,
        lineHeight:24,
        color:'#999'
    },
    tabBoxItemBtn:{
        width:'100%',
        height:40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    redPoint:{
        position:'absolute',
        top:0,
        left:0,
        zIndex:999999,
    },
    redPointView:{
        width:8,
        height:8,
        borderRadius:4,
        backgroundColor:'rgb(227,111,83)',
        position:'absolute',
    },
    redPoint1:{
        left:'53%',
        top:'17%',
        marginLeft:-4
    },
    redPoint2:{
        left:'40%',
        top:'56%',
        marginLeft:-2,
        marginTop:-2
    },
    redPoint3:{
        left:'58%',
        top:'56%',
        marginLeft:-2,
        marginTop:-2
    },
    redPoint4:{
        left:'50%',
        top:'100%',
        marginTop:-12,
        marginLeft:-6
    }
});
