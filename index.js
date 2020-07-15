/**
 * @format
 */

import {AppRegistry,LogBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
LogBox.ignoreAllLogs(true)
if(process.env.NODE_ENV !=='development') {
    console.log = function(){}
}
AppRegistry.registerComponent(appName, () => App);
