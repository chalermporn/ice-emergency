import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, Alert, StyleSheet, ImageBackground, Image, Platform } from 'react-native';
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
 
export default class ForGotPasswordScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,

  };
  // noinspection JSAnnotator
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  forgotPwdHandler = () => {
    // startMainTabs();
    axios.post('http://122.155.9.76/forgot_password.php', {
      email: this.state.email,
    }).then((res) => {
      console.log(res);
      if (res.data.success) {
        alert(res.data.message);
      } else {
        alert('E-Mail not found!!');
      }
    });
  };

  signInHandlePress = () => {
    this.props.navigator.push({
      screen: 'AuthScreen',
      title: 'AuthScreen',
      animated: true,
      animationType: 'fade',
    });
  };
  render() {
    return (
      <BackgroundApp>
        <View style={[styles.container]}>
          <LogoICE />
          <View style={[styles.inputContainer, { height: 240 }]}>
            <Text style={[{ textAlign: 'center' }, stylesApp.defaltText]} > Forgot Your Password. </Text>
            <DefaultInput
              placeholder="E-mail Address"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              style={[styles.input, { marginTop: 40, marginBottom: 30 }]}
            />
            <ButtonWithBackground color="#273673" fontColor="#fff" onPress={this.forgotPwdHandler}>
              <Text style={{ textAlign: 'center' }} > Send  </Text>
            </ButtonWithBackground>
          </View>

          <View style={{
 flex: 1, flexDirection: 'row', alignContent: 'center', marginTop: 5, 
}}
          >
            <View > 
              <Text style={[{ textAlign: 'center' }, stylesApp.defaltText]} onPress={this.signInHandlePress}> Bact to Sing In </Text>
            </View>
          </View>
        </View>
        
     
        <View style={[{ alignItems: 'center', alignContent: 'center' }]} >
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
