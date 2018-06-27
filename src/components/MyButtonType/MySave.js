import React, { Component } from 'react';
import { View, Text, TextInput, Button, Platform, StyleSheet, Image, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import callContactImage from '../../../assets/img/call-contact.png';
import backgroundImage from '../../../assets/img/bg.png';
import profileImage from '../../../assets/img/bird.jpg';
import imSaveImage from '../../../assets/img/im_save.png';

class MySave extends Component {
  placeSubmitHandler = () => {
    alert('I AM SAFE');
  };
  render() {
    return (
      <View style={styles.myContainer} >
        <TouchableOpacity onPress={this.placeSubmitHandler}>
          <Image source={imSaveImage} style={styles.imgSave} />
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

export default MySave;
