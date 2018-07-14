import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, Button, Linking, AsyncStorage, BackHandler } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import axios from 'axios';
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
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.state = {
      Id: '',
    };
    this.validAuthen(); 
  }
  onNavigatorEvent = (event) => {
    console.log(event.id);
    switch (event.id) {
      case 'willAppear':
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        break;
      case 'willDisappear':
        this.backPressed = 3;
        this.backHandler.remove();
        break;
      case 'didAppear':
        this.backPressed = 3;
        this.backHandler.remove();
        // this.props.navigator.dismissModal({
        //   animationType: 'slide-down', // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
        // });
        break;
      default:
        break;
    }
  }
  handleBackPress = () => {
    if (this.backPressed && this.backPressed > 0) {
      this.props.navigator.popToRoot({ animated: false });
      return false;
    }

    this.backPressed = 1;
    this.props.navigator.showSnackbar({
      text: 'Press one more time to exit',
      duration: 'long',
    });
    return true;
  }
  
  async validAuthen() {
    const dId = await AsyncStorage.getItem('Id');
    this.setState({ Id: dId });
    console.log('dId', dId);
  }
  componentDidMount() {
    this.validAuthen();
  }
  onSuccess = (e) => {
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
    console.log(e.data);
    const qrcode = e.data;
    const res = qrcode.substring(8, 19);
    console.log('res: ', res);
    this.setState({ Id: res });
    if (res === 'ICECHECKIN') {
      this.loginHandler(this.state.Id);
      console.log('this.state.Id', this.state.Id);
    }
  }
  async loginHandler(xx) {
    console.log('on click');

    // const data = new FormData();
    // data.append('Id', this.state.Id);
    const { Id } = this.state;
    const data = { Id: Id * 1 };
    
    console.log(`data: ${JSON.stringify(data)}`);
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    axios.post('http://122.155.9.76:8080/checkin', data)
      .then(async (response) => {
        console.log(`response: ${JSON.stringify(response)}`);
        const result = response.data;
        if (result.success) {
          // save token
          console.log(`ok response: ${JSON.stringify(result)}`);
          this.props.navigator.push({
            screen: 'ShareScreen',
            title: 'I AM SAFE',
            navBarHidden: false,
          });
        } else {
          console.log(`No response: ${JSON.stringify(result)}`);
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
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
  gotoShareHandler = () => {
    this.props.navigator.push({
      screen: 'ShareScreen',
      title: 'I AM SAFE',
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
