import React, { Component } from 'react';
import { View, Text, TextInput, Button, Platform, StyleSheet, Image, ImageBackground } from 'react-native';
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
import callContactImage from '../../../assets/img/call-contact.png';
import backgroundImage from '../../../assets/img/bg.png';
import profileImage from '../../../assets/img/bird.jpg';
import MyMessage from '../../components/MyMessage/MyMessage';
import MyButtonLayout from '../../components/MyButtonType/MyButtonLayout';

class MyDisplay extends Component {
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.myContainer}>
          <View style={styles.myContainerImg}>
            <Image source={profileImage} style={{ width: 100, height: 100, borderRadius: 68 }} />
          </View>
          <View style={styles.MyNames}>
            <Text style={styles.MyNamesText}>Chalermporn Pos.</Text>
            <Text style={styles.MyNamesSubText}>ENCO | G FL. 093-949-9289</Text>
            <View style={styles.CallContact}>
              <Image style={styles.CallContactImg} source={callContactImage} />
            </View>
          </View>
        </View>
        <View style={styles.MyMessageBox}>
          <MyMessage />
        </View>
        <View style={styles.MyButtonLayout}>
          <MyButtonLayout />
        </View>
      </ImageBackground>
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
    // backgroundColor: 'powderblue', 
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
  CallContact: {
    marginTop: -20,
  },
  CallContactImg: {
    marginLeft: 10,
    width: 189,
    height: 36,
  },

});

export default MyDisplay;
