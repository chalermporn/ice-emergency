import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, Button, Linking } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import IconA from 'react-native-vector-icons/Ionicons';
import {
  APP_NAME, 
  COLOR_WHITE, 
  COLOR_BLACK, 
  COLOR_BLUE, 
  COLOR_RED, 
  COLOR_GREEN, 
  COLOR_GRAY, 
  KANIT00, 
  KANIT01, 
  KANIT02, 
} from './../../config/variable';
import Container from '../../components/Container';

class ScanQRScreen extends Component {
  static navigatorStyle = { tabBarHidden: true, navBarBackgroundColor: COLOR_RED, screenBackgroundColor: '#000' };
  onSuccess = (e) => {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }
  handlePress = () => {
    this.props.navigator.dismissModal();
  };
  placeSubmitHandler = () => {
    this.props.navigator.push({
      screen: 'MyQRCodeScreen',
      title: 'MY QR CODE',
      navBarHidden: false,
    });
  };
  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText} />
          }
        bottomContent={
          <Button title="MY QR CODE" color="#7BAD41" onPress={this.placeSubmitHandler} />
          }
      />
    );
  }
}
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#fff',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
export default ScanQRScreen;
