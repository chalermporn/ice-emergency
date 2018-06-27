import React, { Component } from 'react';
import { View, Text, TextInput, Button, Platform, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import callContactImage from '../../../assets/img/call-contact.png';
import backgroundImage from '../../../assets/img/bg.png';
import profileImage from '../../../assets/img/bird.jpg';
import helpImage from '../../../assets/img/help.png';

class MyHelp extends Component {
  placeSubmitHandler = () => {
    this.props.navigator.push({
      screen: 'Screen2',
      title: 'Screen 2',
      navBarHidden: true,
    });
  };

  handlePress = () => {
   
  };
  render() {
    return (
      <View style={styles.myContainer} >
      
        <TouchableOpacity onPress={this.placeSubmitHandler}>
          <Image source={helpImage} style={styles.imgSave} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  myContainer: {
    backgroundColor: '#fff',
  },
  imgSave: {
    width: 160,
    height: 160,
  },

});

export default MyHelp;
