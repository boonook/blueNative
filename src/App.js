import { Provider } from 'mobx-react';
import React,{Component} from 'react';
// import SplashScreen from 'react-native-splash-screen'
import Url from "./Router";
import store from './modles/index';
export default class App extends Component{
    componentDidMount() {
        // 组件加载完毕之后，隐藏启动页
        // SplashScreen.hide();
    }
    render(){
        return (
            <Provider {...store}>
                <Url/>
            </Provider>
        );
    }
};
