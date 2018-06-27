import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Platform } from 'react-native';

const buttonWithBackground = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text style={[styles.textInput, { color: props.fontColor }]}> {props.children} </Text>
    </View>
  </TouchableOpacity>


// <ButtonWithBackground color="#000" fontColor="#fff" onPress={this.loginHandler}>
// <Text style={{ textAlign: 'center' }} > Sign In </Text>
// </ButtonWithBackground>

);

const styles = StyleSheet.create({
  button: {
    width: Platform.OS === 'ios' ? '96%' : '97%',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 5,
    borderRadius: 0,
    alignItems: 'center',
  },
  textInput: {
    alignContent: 'center',
    fontWeight: 'bold',
   
  },
});

export default buttonWithBackground;