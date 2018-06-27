import React, { Component } from 'react';
import { View, Text, TextInput, Button, Platform, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import {
  APP_NAME, 
  COLOR_WHITE, 
  COLOR_BLACK, 
  COLOR_BULE, 
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
      <View styles={styles.mainConatinerStyle}> 
        {/* <ImageBackground source={backgroundImage} style={styles.backgroundImage}> */}
        {/* <View style={[styles.myContainer, { height: heightScreen }]}>
            <Text>dddd</Text>
            <Button
              title="QR CODE READER"
              color="#7BAD41"
              onPress={this.placeSubmitHandler} 
              style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
            }}
            />
          </View> */}
        <Button
          title="QR CODE READER"
          color="#7BAD41"
          onPress={this.placeSubmitHandler} 
          style={styles.floatingMenuButtonStyle}
        />

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
  }, 
  floatingMenuButtonStyle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35,
  },
  

});

export default MyQRCodeScreen;