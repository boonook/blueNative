import React, { Component } from 'react';
import {View} from "react-native";
import Echarts from 'native-echarts'
export default class EchartsScreen extends Component {
    constructor(props) {
        super();
        this.state={

        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <View>
                <Echarts option={this.props.option} height={this.props.height}/>
            </View>
        );
    }
}
