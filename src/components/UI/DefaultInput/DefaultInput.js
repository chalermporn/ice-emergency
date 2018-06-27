import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={[styles.input, props.style]}
  />
);

const styles = StyleSheet.create({
  input: {
    width: '95%',
    // borderWidth: 1,
    borderBottomWidth: 1.5,
    borderColor: '#eee',
    padding: 10,
    margin: 8,
  },
});

export default defaultInput;


// import React from 'react';

// import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
// import { Kohana } from 'react-native-textinput-effects';

// const defaultInput = props => (
//   <Kohana
//     style={{ backgroundColor: '#f9f5ed' }}
//     label="Line"
//     iconClass={MaterialsIcon}
//     iconName="directions-bus"
//     iconColor="#f4d29a"
//     labelStyle={{ color: '#91627b' }}
//     inputStyle={{ color: '#91627b' }}
//     useNativeDriver
//   />
// );
// export default defaultInput;