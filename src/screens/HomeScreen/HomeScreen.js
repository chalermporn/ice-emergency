import React, { Component } from 'react';
import { View, Text, TextInput, Button, Platform, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import FCM, { FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType } from 'react-native-fcm';
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
import callContactImage from '../../../assets/img/call-contact.png';
import backgroundImage from '../../../assets/img/bg.png';
import profileImage from '../../../assets/img/bird.jpg';
import MyMessage from '../../components/MyMessage/MyMessage';
import MyButtonLayout from '../../components/MyButtonType/MyButtonLayout';
import { storeSaveData } from '../../utility/localStorage';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  onNavigatorEvent = (event) => {
    console.log(event.id);
  }

  componentDidUpdate() {
    const window = Dimensions.get('window');
    console.warn('width:', window.width, 'height:', window.height);
    console.warn('ok');
    // test();
    FCM.requestPermissions().then(() => console.log('granted')).catch(() => console.log('notification permission rejected'));
    
    FCM.getFCMToken().then((token) => {
      console.log(token);
      // store fcm token in your server
    });
    
    FCM.on(FCMEvent.Notification, async (notif) => {
      console.log(notif);
      if (notif.opened_from_tray && notif.collapse_key === 'com.iceemergency') {
        alert('check from server');
        console.log(notif);
      } else if (!notif.opened_from_tray) {
        this.placeSubmitHandler();
      }
    });
  }
  
  
  placeSubmitHandler = () => {
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
      <View style={{ justifyContent: 'center' }}> 
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <View style={styles.myContainer}>
            <View style={styles.myContainerImg}>
              <Image source={profileImage} style={{ width: 100, height: 100, borderRadius: 68 }} />
            </View>
            <View style={styles.MyNames}>
              <Text style={styles.MyNamesText}>Chalermporn Pos.</Text>
              <Text style={styles.MyNamesSubText}>ENCO | G FL. 093-949-9289</Text>
              <View style={styles.CallContact}>
                <Text style={styles.Emergency}>Emergency Contact </Text>
                <Text style={styles.MyNamesSubText}>093-949-9289</Text>
              </View>
            </View>
          </View>
          <View style={[styles.MyMessageBox, {}]}>
            <MyMessage color={COLOR_BLUE} >สถานการณ์ปกติ NORMAL SITUATION</MyMessage>
          </View>

          <View style={{
 justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1, 
}}
          > 
            <TouchableOpacity onPress={this.placeSubmitHandler} >
              <View style={{
 width: 160, height: 160, backgroundColor: COLOR_GREEN, alignItems: 'center', justifyContent: 'center', marginRight: 5,
}}
              >
                <Text style={{
 fontFamily: KANIT02, fontSize: 30, color: '#fff', justifyContent: 'center', alignContent: 'center', alignItems: 'center', 
}}
                >ปลอดภัย
                </Text>
                <Text style={{ fontFamily: KANIT02, fontSize: 20, color: '#fff' }}>I AM SAFE</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.placeSubmitHandler} >
              <View style={{
 width: 160, height: 160, backgroundColor: COLOR_RED, alignItems: 'center', justifyContent: 'center', marginLeft: 5,
}}
              >
                <Text style={{
 fontFamily: KANIT02, fontSize: 30, color: '#fff', lineHeight: 30, 
}}
                >ขอความ{'\n'}ช่วยเหลือ
                </Text>
                <Text style={{ fontFamily: KANIT02, fontSize: 20, color: '#fff' }}>Help</Text>
              </View>
            </TouchableOpacity>
          </View>


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
  },
  myContainer: {
    flexDirection: 'row', 
    backgroundColor: '#273673',
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0.5, height: 0.5 },
  },
  MyMessageBox: {
    // marginTop: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
  },
  MyButtonLayout: {

  },
  myContainerImg: {
    width: 100, 
    height: 100, 
    borderRadius: 64,
  },
  MyNames: {
    width: Platform.OS === 'ios' ? 245 : 280,
    height: 70,
 

  },
  Emergency: {
    fontSize: 14,
    padding: 10,
    color: '#fff',
    marginTop: -10,  
  },
  MyNamesText: {
    fontSize: 25,
    padding: 10,
    color: '#fff',
    marginTop: -10,
  },
  MyNamesSubText: {
    padding: 10,
    fontSize: 14,
    color: '#fff',
    marginTop: -20,
    marginBottom: 20,
  },
  CallContact: {
    marginTop: -20,
  },
  CallContactImg: {
    marginLeft: 10,
    width: 189,
    height: 36,
  },
  myContainerX: {
    backgroundColor: '#fff',
    padding: 15,
    height: 210,
  },
 

});


export default HomeScreen;