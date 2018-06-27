import { Navigation } from 'react-native-navigation';
import configureStore from './src/store/configureStore';

import AuthScreen from './src/screens/Auth/Auth';
import ForGotPasswordScreen from './src/screens/Auth/ForGotPassword';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import Screen2 from './src/screens/HomeScreen/Screen2';
import Screen3 from './src/screens/HomeScreen/Screen3';
import IAmSafeScreen from './src/screens/HomeScreen/IAmSafeScreen';
import ScanQRScreen from './src/screens/HomeScreen/ScanQRScreen';
import MyQRCodeScreen from './src/screens/HomeScreen/MyQRCodeScreen';


import VitalInfoScreen from './src/screens/VitalInfoScreen/VitalInfoScreen';
import MedicalCondScreen from './src/screens/MedicalCondScreen/MedicalCondScreen';
import EmerCallScreen from './src/screens/EmerCallScreen/EmerCallScreen';
import SettingScreen from './src/screens/SettingScreen/SettingScreen';

const store = configureStore();

// Register Screens
Navigation.registerComponent('AuthScreen', () => AuthScreen);
Navigation.registerComponent('ForGotPasswordScreen', () => ForGotPasswordScreen);
Navigation.registerComponent('HomeScreen', () => HomeScreen);
Navigation.registerComponent('Screen2', () => Screen2);
Navigation.registerComponent('Screen3', () => Screen3);
Navigation.registerComponent('IAmSafeScreen', () => IAmSafeScreen);
Navigation.registerComponent('ScanQRScreen', () => ScanQRScreen);
Navigation.registerComponent('MyQRCodeScreen', () => MyQRCodeScreen);


Navigation.registerComponent('VitalInfoScreen', () => VitalInfoScreen);
Navigation.registerComponent('MedicalCondScreen', () => MedicalCondScreen);
Navigation.registerComponent('EmerCallScreen', () => EmerCallScreen); 
Navigation.registerComponent('SettingScreen', () => SettingScreen);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'AuthScreen',
    title: 'Login',
  },

});