
import React from 'react';
import { Text, ImageBackground, StyleSheet, Platform } from 'react-native';
import logoImage from '../../../../assets/img/logo_ice.png';
import backgroundImage from '../../../../assets/img/bg.png';

const BackgroundApp = props => (
  <ImageBackground
    source={backgroundImage} 
    style={{
    width: '100%',
      flex: 1,  
    }} 
  >{ props.children }
  </ImageBackground>
);


export default BackgroundApp;

