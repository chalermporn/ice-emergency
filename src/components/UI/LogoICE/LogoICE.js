import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import logoImage from '../../../../assets/img/logo_ice.png';
import stylesApp from '../../../styles/v1.0/app';
 
const LogoICE = props => (
  <View style={styles.container}>
    <Image
      source={logoImage}
      style={styles.logo}
    />
    <Text style={[styles.logoText, stylesApp.defaltTextBold]}>
    Life Assistant & {'\n'}
    Evacuation Tool
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 50 : 30,
    alignItems: 'center',
  },
  logo: {
    width: Platform.OS === 'ios' ? 210 : 210, 
    height: Platform.OS === 'ios' ? 210 : 210, 
  },
  logoText: {
    marginTop: 5, marginBottom: 10, fontSize: 25, lineHeight: 26, 
  },
});

export default LogoICE;