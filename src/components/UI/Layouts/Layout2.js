import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import logoImage from '../../../../assets/img/logo_ice.png';
import styles from '../../../styles/v1.0/app';
 
const Layout2 = props => (
  <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }} >
    {props.children}
  </View>
);


export default Layout2;