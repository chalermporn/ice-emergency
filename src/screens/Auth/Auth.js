import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ImageBackground,
  Image,
  Platform,
  AsyncStorage,
  Keyboard,
  TouchableHighlight,
} from 'react-native';
import FCM, { FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType } from 'react-native-fcm';
import axios from 'axios';
import startMainTabs from '../MainTabs/startMainTabs';

import LogoICE from '../../components/UI/LogoICE/LogoICE';
import Layout2 from '../../components/UI/Layouts/Layout2';
import BackgroundApp from '../../components/UI/BackgroundApp/BackgroundApp';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

import logoImage from '../../../assets/img/logo_ice.png';
import logoTextImage from '../../../assets/img/logo-text.png';
import logoEncoFImage from '../../../assets/img/logo-ecno-powered-by.png';
import stylesApp from '../../styles/v1.0/app';
import { storeSaveData } from '../../utility/localStorage';

export default class AuthScreen extends Component {
  static navigatorStyle = { navBarHidden: true, animationType: 'fade' };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      notiToken: '',
    };

    this.validAuthen();
  }


  async validAuthen() {
    // AsyncStorage.clear();
    const dUsername = await AsyncStorage.getItem('username');
    const dPassword = await AsyncStorage.getItem('password');
    const dSuccess = await AsyncStorage.getItem('success');
    const dActive = await AsyncStorage.getItem('active');
    console.log('dUsername : ', dUsername);
    console.log('dPassword : ', dPassword);
    console.log('dSuccess : ', dSuccess);
    console.log('dActive : ', dActive);
    // this.goHomeScreen();
    if (dSuccess === 'true') {
      this.goHomeScreen();
    }
  }


  goHomeScreen = () => {
    startMainTabs();
  }
  async loginHandler() {
    console.log('on click');
    
    FCM.requestPermissions().then(() => console.log('granted')).catch(() => console.log('notification permission rejected'));
    
    FCM.getFCMToken().then((token) => {
      console.log(token);
      // store fcm token in your server
      this.setState({ notiToken: token });
    
      const { username, password, notiToken } = this.state;
      const data = { username, password, notiToken: token };
    
      console.log(`data: ${JSON.stringify(data)}`);
    
      axios.post('http://122.155.9.76:8080/login', data)
        .then(async (response) => {
          console.log(`response: ${JSON.stringify(response)}`);
          const result = response.data;
          if (result.success) {
          // save token

            await AsyncStorage.setItem('Id', `${result.Id}` + '');
            await AsyncStorage.setItem('username', result.username);
            await AsyncStorage.setItem('password', result.password);

            await AsyncStorage.setItem('success', 'true');
            if (result.active === 1) {
              await AsyncStorage.setItem('active', '1');
            }

            await AsyncStorage.setItem('FirstName', result.FirstName);
            await AsyncStorage.setItem('LastName', result.LastName);
            await AsyncStorage.setItem('EmployeeNumber', result.EmployeeNumber);
            await AsyncStorage.setItem('Phone', result.Phone);
            await AsyncStorage.setItem('PhoneEmer', result.PhoneEmer);
            await AsyncStorage.setItem('email', result.email);
            await AsyncStorage.setItem('Company', result.Company);
            await AsyncStorage.setItem('Department', result.Department);
            await AsyncStorage.setItem('Building', result.Building);
            await AsyncStorage.setItem('Floor', result.Floor);
            await AsyncStorage.setItem('DateOfBirth', result.DateOfBirth);
            await AsyncStorage.setItem('Allergies', result.Allergies);
            await AsyncStorage.setItem('Bloodtype', result.Bloodtype);
            await AsyncStorage.setItem('Weight', result.Weight);
            await AsyncStorage.setItem('Height', result.Height);
            await AsyncStorage.setItem('username', result.username);
            await AsyncStorage.setItem('password', result.password);
            await AsyncStorage.setItem('imgProfile', result.imgProfile);
            await AsyncStorage.setItem('active', result.LastName);
            await AsyncStorage.setItem('notiToken', result.notiToken);
            await AsyncStorage.setItem('token', result.token);
            await AsyncStorage.setItem('qrCode', result.qrCode);
            await AsyncStorage.setItem('message', result.message);
            await AsyncStorage.setItem('qrCode64', result.qrCode64);

            // show successful alert
            Alert.alert(
              'Login Successful', '',
              [
                { text: 'OK', onPress: () => startMainTabs() },
              ],
            );
          } else {
            Alert.alert('Login Failed');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }


  forGotPasswordhHandlePress = () => {
    this.props.navigator.push({
      screen: 'ForGotPasswordScreen',
      title: 'ForGotPasswordScreen',
      animated: true,
      animationType: 'fade',
    });
  };
 

  render() {
    return (
      <BackgroundApp>
        <View style={styles.container}>
          <LogoICE />
          <View style={styles.inputContainer}>
            {/* <DefaultInput

              placeholder="Username"
              style={styles.input}
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
            /> */}
            {/* <DefaultInput
                placeholder="Password"
                style={styles.input}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                secureTextEntry
              /> */}
            <TextInput
              onChangeText={text => this.setState({ username: text })}
              // keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              placeholder="Username"
              underlineColorAndroid="transparent"
            />
            <TextInput
              onChangeText={text => this.setState({ password: text })}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              secureTextEntry
              placeholder="Password"
              underlineColorAndroid="transparent"
            />
            <Text style={[{ textAlign: 'right' }, stylesApp.defaltText]} onPress={this.forGotPasswordhHandlePress}> forgot
              password? 
            </Text>
            <ButtonWithBackground color="#273673" fontColor="#fff" onPress={this.loginHandler.bind(this)}>
              <Text style={{ textAlign: 'center' }}> Sign In </Text>
            </ButtonWithBackground>
            
          </View>
          <Layout2>
            <View style={{ width: 165, height: 30 }}>
              <Text style={[{ textAlign: 'left' }, stylesApp.defaltText]}> Privacy Policy </Text>
            </View>
            <View style={{ width: 165, height: 30 }}>
              <Text style={[{ textAlign: 'right' }, stylesApp.defaltText]}> Need Help ? </Text>
            </View>
          </Layout2>
        </View>
        <View style={[{ alignItems: 'center', alignContent: 'center' }]}>
          <Image
            source={logoEncoFImage}
            style={{
              width: Platform.OS === 'ios' ? 164 : 164,
              height: Platform.OS === 'ios' ? 24 : 24,
              marginBottom: Platform.OS === 'ios' ? 20 : 20,
              alignItems: 'center',
              alignContent: 'center',
            }}
          />
        </View>

      </BackgroundApp>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    flex: 1,
  },
  inputContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0.5, height: 0.5 },
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    width: '95%',
    // borderWidth: 1,
    borderBottomWidth: 1.5,
    padding: 10,
    margin: 8,
  },
  loginButton: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 40,
    borderRadius: 10,
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center',
  },
});