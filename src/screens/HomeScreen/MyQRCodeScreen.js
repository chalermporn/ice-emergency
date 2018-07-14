import React, { Component } from 'react';
import { View, Text, TextInput, Button, Platform, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity, AsyncStorage, BackHandler } from 'react-native';

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
import imSaveImage from '../../../assets/img/im_save.png';
import helpImage from '../../../assets/img/help.png';
import scanCamImage from '../../../assets/img/scan-cam.png';
import callContactImage from '../../../assets/img/call-contact.png';
import backgroundImage from '../../../assets/img/bg.png';
import profileImage from '../../../assets/img/bird.jpg';
import MyMessage from '../../components/MyMessage/MyMessage';
import MyButtonLayout from '../../components/MyButtonType/MyButtonLayout';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
class MyQRCodeScreen extends Component {
  static navigatorStyle = {
    tabBarHidden: false, navBarBackgroundColor: COLOR_RED, title: 'ALERT', navBarLeftButtonColor: '#fff', 
  };
  constructor(props) {
    super(props);
    // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.state = {
      username: '',
      password: '',
      FirstName: '',
      LastName: '',
      qrCode64: '',
      Company: '',
      Department: '',
      EmployeeNumber: '',
      Phone: '',
      PhoneEmer: '',
      email: '',
      Building: '',
      Floor: '',
    };
    this.validAuthen();
  }
  onNavigatorEvent = (event) => {
    console.log(event.id);
  }
  async validAuthen() {
    console.log('validAuthen');
    const dqrCode64 = await AsyncStorage.getItem('qrCode64');
    console.log('dqrCode64', dqrCode64);
    this.setState({ qrCode64: dqrCode64 });
    console.log('qrCode64', this.state.qrCode64);
  }
  onNavigatorEvent(event) {
    switch (event.id) {
      case 'willAppear':
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        break;
      case 'willDisappear':
        this.backPressed = 0;
        this.backHandler.remove();
        break;
      default:
        break;
    }
  }
  onNavigatorEvent = (event) => {
    console.log(event.id);
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
  
  componentDidUpdate() {
    const window = Dimensions.get('window');
    console.warn('width:', window.width, 'height:', window.height);
  }
  placeSubmitHandler = () => {
    // this.props.navigator.push({
    //   screen: 'ScanQRScreen',
    //   title: 'QR CODE RANDER',
    //   navBarHidden: true,
    // });
    this.props.navigator.push({
      screen: 'IAmSafeScreen',
      title: 'ALERT',
      id: 'alertFire',
      navBarHidden: true,
      navBarLeftButtonFontSize: 17, // Change font size of left nav bar button
      navBarLeftButtonColor: 'red', // Change color of left nav bar button
      navBarLeftButtonFontWeight: '400', // Change font weight of left nav bar button
    });
  };
  render() {
    return (
      <View style={[styles.mainConatinerStyle, { height: heightScreen, width: widthScreen }]}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <Image
            resizeMode="contain"
            style={{ width: (widthScreen * 50) / 100, height: '100%', flex: 0.5 }}
            source={{ uri: this.state.qrCode64 }}
          />
          <Text style={{ flex: 0.5, alignContent: 'center' }}>
            Have Safety Officer Scan Your  QR CODE to Check in.
            {'\n'}{'\n'}
            ให้เจ้าหน้าที่ ทำการ สแกน QR CODE ของคุณเพื่อเช็คอิน
          </Text>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    // flex: 1,
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  },
  myContainer: {
    flexDirection: 'row', 
    backgroundColor: '#000',
    opacity: 0.5,

    padding: 15,
  
  },
  mainConatinerStyle: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  }, 
  floatingMenuButtonStyle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35,
  },
  

});

export default MyQRCodeScreen;