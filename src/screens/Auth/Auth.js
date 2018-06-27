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
} from 'react-native';
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

export default class AuthScreen extends Component {
  static navigatorStyle = { navBarHidden: true, animationType: 'fade' };
  state = {
    username: 'SOMPONG.KRA',
    password: 'password',
    noti_token: '00000',
  };

  componentWillMount() {
    // AsyncStorage.clear();
    showData = async () => {
      const myA = await AsyncStorage.getItem('myProfile');
      const d = JSON.parse(myA);
      // console.warn(d.email);
      if (d.success) {
        startMainTabs();
      }
    };
    showData();
  }


  saveLocalStorage = (profile) => {
    AsyncStorage.setItem('myProfile', JSON.stringify(profile));
    Keyboard.dismiss();
  };

  loginHandler = () => {
    console.log(this.state);
    axios.post('http://122.155.9.76:8080/login', {
      username: this.state.username,
      password: this.state.password,
      noti_token: '00000',
    }).then((res) => {
      console.log(res);
      if (res.data.success) {
        console.log('True');
        this.setState({ isLoggingIn: true, message: '' });
        // alert(res.data.message);
        this.saveLocalStorage(res.data);
        startMainTabs();
      } else {
        console.log('False');
        alert(res.data.message);
      }
    });
    // startMainTabs();
  }
  forGotPasswordhHandlePress = () => {
    this.props.navigator.push({
      screen: 'ForGotPasswordScreen',
      title: 'ForGotPasswordScreen',
      animated: true,
      animationType: 'fade',
    });
  };

  showData = async () => {
    const myA = await AsyncStorage.getItem('myProfile');
    const d = JSON.parse(myA);
    console.warn(d.email);
  }

  render() {
    return (
      <BackgroundApp>
        <View style={styles.container}>
          <LogoICE />
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Username"
              style={styles.input}
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
            />
            <DefaultInput
              placeholder="Password"
              style={styles.input}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              secureTextEntry
            />
            <Text style={[{ textAlign: 'right' }, stylesApp.defaltText]} onPress={this.forGotPasswordhHandlePress}> forgot
              password? 
            </Text>
            <ButtonWithBackground color="#273673" fontColor="#fff" onPress={this.loginHandler}>
              <Text style={{ textAlign: 'center' }}> Sign In </Text>
            </ButtonWithBackground>
            {/* <ButtonWithBackground color="#273673" fontColor="#fff" onPress={this.showData}>
              <Text style={{ textAlign: 'center' }}> Sign InshowData </Text>
            </ButtonWithBackground> */}
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
  },
});