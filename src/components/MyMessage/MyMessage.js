import React from 'react';
import { View, Text, TextInput, Button, Platform, StyleSheet, Image, ImageBackground, ScrollView, Dimensions } from 'react-native';
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

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const MyMessage = props => (
  <View style={styles.myContainer}>
    <Text style={[styles.headLine, { color: props.color }]}>แจ้งเตือน / Notification</Text>
    <Text style={[styles.messageText, { color: props.color }]}>{props.children}</Text>
    <View style={styles.Instructions}>
      <Text style={styles.headLineInstructions}>
          Emergency Instructions.
      </Text>
      <ScrollView style={{ height: widthScreen <= 360 ? 55 : 55, width: Platform.OS === 'ios' ? ((widthScreen * 83) / 100) : ((widthScreen * 83) / 100) }}>
        <Text style={styles.messageTextInstructions}>
              1. อ่านคำแจ้งเตือน / Follow alert notifications.{'\n'}
              2. สแกน QR-CODE หรือ กดเช็คอิน / Scan QR Code or Check in to identify your status.{'\n'}
              3. ปฎิบัติตามคำแนะนำของเจ้าหน้าที่ / Follow further notifications.{'\n'}
        </Text>
      </ScrollView>
    </View>
  </View>
);

const styles = StyleSheet.create({
 
  myContainer: {
    backgroundColor: '#fff',
    padding: 15,
    height: widthScreen <= 360 ? 180 : 210,
  },
  headLine: {
    fontFamily: KANIT01,
    fontSize: widthScreen <= 360 ? 20 : 25,
    alignSelf: 'center',
  },
  messageText: {
    fontFamily: KANIT00,
    fontSize: widthScreen <= 360 ? 14 : 16,
    marginTop: 10,
    alignSelf: 'center',
    height: widthScreen <= 360 ? 40 : 45,
  },
  Instructions: {
    
  },
  headLineInstructions: {
    fontFamily: KANIT01,
    marginTop: widthScreen <= 360 ? 0 : 15,
    fontSize: widthScreen <= 360 ? 14 : 14,
  },
  messageTextInstructions: {
    fontSize: 13,
    fontFamily: KANIT00,
  },

});

export default MyMessage;
