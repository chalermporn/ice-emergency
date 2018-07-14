import React, { Component } from 'react';
import { View, Text, TextInput, Button, Platform, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native';
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
class ShareScreen extends Component {
  static navigatorStyle = {
    tabBarHidden: false, navBarBackgroundColor: COLOR_GREEN, title: 'I AM SAFE', navBarLeftButtonColor: '#fff', 
  };
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.state = {
      username: '',
      password: '',
      FirstName: '',
      LastName: '',
      ImgProfile: '',
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
  async validAuthen() {
    console.log('validAuthen');
    const dImgProfile = await AsyncStorage.getItem('ImgProfile');
    console.log('dImgProfile', dImgProfile);
    this.setState({ ImgProfile: dImgProfile });
    console.log('ImgProfile', this.state.ImgProfile);
  }
  componentDidUpdate() {
    const window = Dimensions.get('window');
    console.warn('width:', window.width, 'height:', window.height);
  }
  placeSubmitHandler = () => {
    this.props.navigator.push({
      screen: 'ScanQRScreen',
      title: 'QR CODE RANDER',
      navBarHidden: true,
    });
  };
  render() {
    return (
      <View style={[styles.mainConatinerStyle, { height: heightScreen, width: widthScreen }]}>
        {/* <ImageBackground source={backgroundImage} style={styles.backgroundImage}> */}
        <Image
          resizeMode="contain"
          style={{ width: (widthScreen * 95) / 100, height: '100%', borderRadius: 68 }}
          source={{ uri: this.state.ImgProfile }}
        />
        {/* <Button
          title="QR CODE READER"
          color="#7BAD41"
          onPress={this.placeSubmitHandler} 
          style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
            }}
        /> */}
        {/* <Button
          title="QR CODE READER"
          color="#7BAD41"
          onPress={this.placeSubmitHandler} 
          style={styles.floatingMenuButtonStyle}
        /> */}

        {/* </ImageBackground> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    // flex: 1,
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

export default ShareScreen;