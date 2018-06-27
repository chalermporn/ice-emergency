// import React, { Component } from 'react';
// import { View, Text, Button, ScrollView } from 'react-native';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking, 
  Button,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import IconA from 'react-native-vector-icons/Ionicons';
import Container from '../../components/Container';

const { width, height } = Dimensions.get('window');

class Screen extends Component {
  static navigatorStyle = { tabBarHidden: false };
  // onSuccess = (e) => {
  //   Linking
  //     .openURL(e.data)
  //     .catch(err => console.error('An error occured', err));
  // }
  handlePress = () => {
    this.props.navigator.showModal({
      screen: 'Screen3',
      title: 'Screen 3',
    });
  };


  render() {
    return (
      // <View>
      //   <ScrollView style={{ height: 200, width: 300 }}>
      //     <Text style={{ fontFamily: 'Kanit-Regular', fontSize: 30 }}>
      //     ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ
      //     ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ
      //     ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ
      //     </Text>
      //   </ScrollView>
      //   <Button title="open modal" onPress={this.handlePress} />
      // </View>
      // <QRCodeScanner
      //   onRead={this.onSuccess.bind(this)}
      //   topContent={
      //     <Text style={styles.centerText}>
      //     Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
      //     </Text>
      //   }
      //   bottomContent={
      //     <Button title="open modal" onPress={this.handlePress} />
      //   }
      // />
     

      <View style={{ flex: 1, flexDirection: 'row', width }}>
        <View style={{
        flex: 5, flexDirection: 'column', alignItems: 'center', backgroundColor: 'red', 
        }}
        >
          <View style={{ backgroundColor: 'red' }}><Text>text</Text></View>
        </View>
      
        <View style={{ flex: 1 }} />
      
        <View style={{ flex: 5, flexDirection: 'column', backgroundColor: 'green' }}>
          <View><Text>text</Text></View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
  },
  textBold: {
    fontWeight: '500',
  },
  buttonText: {
    fontSize: 21,
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default Screen;
