import React, { Component } from 'react';
import { View, Text, TextInput, Button, Platform, StyleSheet, Image, ImageBackground } from 'react-native';
import callContactImage from '../../../assets/img/call-contact.png';
import MySave from './MySave';
import MyHelp from './MyHelp';

class MyButtonLayout extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={styles.bL}>
          <MySave />
        </View>
        <View style={styles.bR}>
          <MyHelp />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  myContainer: {
    backgroundColor: '#fff',
    padding: 15,
    height: 210,
  },
  bL: {
    width: 160, 
    height: 160, 
    backgroundColor: 'powderblue', 
    marginLeft: 20, 
  },
  bR: {
    width: 160, 
    height: 160, 
    backgroundColor: 'skyblue', 
    marginLeft: Platform.OS === 'ios' ? 15 : 50, 
  },
});

export default MyButtonLayout;
