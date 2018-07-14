import React, { Component } from 'react';
import { View, Text, TextInput, Button, Platform, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native';
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
import scanCamImage from '../../../assets/img/scan-cam.png';
import callContactImage from '../../../assets/img/call-contact.png';
import backgroundImage from '../../../assets/img/bg.png';
import profileImage from '../../../assets/img/bird.jpg';
import MyMessage from '../../components/MyMessage/MyMessage';
import MyButtonLayout from '../../components/MyButtonType/MyButtonLayout';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
class IAmSafeScreen extends Component {
  static navigatorStyle = {
    tabBarHidden: false, navBarBackgroundColor: COLOR_RED, title: 'ALERT', navBarLeftButtonColor: '#fff', 
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
      Id: '',

    };
    this.validAuthen();
  }
  onNavigatorEvent = (event) => {
    console.log(event.id);
  }
  componentDidMount() {
    const window = Dimensions.get('window');
    console.warn('width:', window.width, 'height:', window.height);
    FCM.requestPermissions().then(() => console.log('granted')).catch(() => console.log('notification permission rejected'));
  
    FCM.on(FCMEvent.Notification, async (notif) => {
      console.log('หน้า สอง', notif);
      if (notif.opened_from_tray && notif.collapse_key === 'com.iceemergency') {
        alert('check from server');
        console.log(notif);
      } else if (!notif.opened_from_tray) {
        alert(notif);
      }
    });
    this.validAuthen();
  }
  placeSubmitHandler = () => {
    if (Platform.OS === 'ios') {
      this.props.navigator.push({
        screen: 'ScanQRScreen',
        title: 'QR CODE RANDER',
        navBarHidden: true,
      }); 
    } else {
      this.props.navigator.showModal({
        screen: 'ScanQRScreen',
        title: 'QR CODE RANDER',
        navBarHidden: true,
      });
    }
  };

  
  handleClose = () => {
    this.props.navigator.popToRoot({ animated: true });
    return false;
    // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(1));
  };

  async validAuthen() {
    console.log('validAuthen');
    // AsyncStorage.clear();
    const dId = await AsyncStorage.getItem('Id');
    const dUsername = await AsyncStorage.getItem('username');
    const dPassword = await AsyncStorage.getItem('password');
    const dSuccess = await AsyncStorage.getItem('success');
    const dActive = await AsyncStorage.getItem('active');
    const dFirstName = await AsyncStorage.getItem('FirstName');
    const dLastName = await AsyncStorage.getItem('LastName');
    const dImgProfile = await AsyncStorage.getItem('imgProfile');
    const dDepartment = await AsyncStorage.getItem('Department');
    const dCompany = await AsyncStorage.getItem('Company');
    const dEmployeeNumber = await AsyncStorage.getItem('EmployeeNumber');
    const dPhone = await AsyncStorage.getItem('Phone');
    const dPhoneEmer = await AsyncStorage.getItem('PhoneEmer');
    const demail = await AsyncStorage.getItem('email');
    const dBuilding = await AsyncStorage.getItem('Building');
    const dFloor = await AsyncStorage.getItem('Floor');
    
    console.log('dUsername : ', dUsername);
    console.log('dPassword : ', dPassword);
    console.log('dSuccess : ', dSuccess);
    console.log('dActive : ', dActive);

    this.setState({ username: dUsername });
    this.setState({ FirstName: dFirstName });
    this.setState({ LastName: dLastName });
    this.setState({ ImgProfile: dImgProfile });
    this.setState({ Company: dCompany });
    this.setState({ Department: dDepartment });
    this.setState({ EmployeeNumber: dEmployeeNumber });
    this.setState({ Phone: dPhone });
    this.setState({ PhoneEmer: dPhoneEmer });
    this.setState({ email: demail });
    this.setState({ Building: dBuilding });
    this.setState({ Floor: dFloor });
    this.setState({ Id: dId });
  }

  render() {
    return (
      <View style={{ justifyContent: 'center' }}> 
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <View style={styles.myContainer}>
            <View style={styles.myContainerImg}>
              <Image
                style={{ width: 100, height: 100, borderRadius: 68 }}
                source={{ uri: this.state.ImgProfile }}
              />
            </View>
            <View style={styles.MyNames}>
              {/* <Text style={styles.MyNamesText}>Chalermporn Pos.</Text>
              <Text style={styles.MyNamesSubText}>ENCO | G FL. 093-949-9289</Text>
              <View style={styles.CallContact}>
                <Text style={styles.Emergency}>Emergency Contact </Text>
                <Text style={styles.MyNamesSubText}>093-949-9289</Text>
              </View> */}
              <Text style={styles.MyNamesText}>{this.state.username}</Text>
              <Text style={styles.MyNamesSubText}>{this.state.Company} | {this.state.Floor} FL. {this.state.Phone}</Text>
              <View style={styles.CallContact}>
                <Text style={styles.Emergency}>Emergency Contact </Text>
                <Text style={styles.MyNamesSubText}>{this.state.PhoneEmer}</Text>
              </View>
            </View>
          </View>
          <View style={styles.MyMessageBox}>
            <MyMessage color={COLOR_RED} >ไฟไหม้ ตึกA ชั้น15</MyMessage>
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
                <Image source={scanCamImage} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleClose} >
              <View style={{
 width: 160, height: 160, backgroundColor: COLOR_GREEN, alignItems: 'center', justifyContent: 'center', marginLeft: 5,
}}
              >
                <Text style={{ fontFamily: KANIT02, fontSize: 30, color: '#fff' }}>เช็คอิน</Text>
                <Text style={{ fontFamily: KANIT02, fontSize: 20, color: '#fff' }}>CHECK IN</Text>
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
    backgroundColor: COLOR_RED,
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
  Emergency: {
    fontSize: 14,
    padding: 10,
    color: '#fff',
    marginTop: -10,  
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

export default IAmSafeScreen;