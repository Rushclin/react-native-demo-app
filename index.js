/**
 * @format
 */

/**
 * Remove console.warn
 */
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/app/App';

AppRegistry.registerComponent(appName, () => App);
