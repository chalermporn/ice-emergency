import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, Button, Image, AsyncStorage } from 'react-native';
import Container from '../../components/Container';
import birdImage from '../../../assets/img/bird.jpg';
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


class HomeScreen extends Component {
  static navigatorStyle = { navBarBackgroundColor: COLOR_RED };
  state = {
    img_profile: '',
    defaultImage: '',
    base64Image: '',
  };

  componentWillMount() {
    showData = async () => {
      const myA = await AsyncStorage.getItem('myProfile');
      const d = JSON.parse(myA);
      console.log('bird', d.img_profile);
      
      this.setState({ img_profile: d.img_profile });
      this.setState({ defaultImage: birdImage });

      if (this.state.img_profile == null) {
        this.setState({ base64Image: `data:image/png;base64,${this.state.img_profile}` });
      } else {
        // this.setState({ base64Image:  });
        this.setState({ base64Image: this.state.defaultImage });
      }
    };
    showData();
  }
  handlePress = () => {
    this.props.navigator.push({
      screen: 'Screen2',
      title: 'Screen 2',
      navBarHidden: true,
    });
  };
  render() {
    // const imgProfile = AsyncStorage.getItem('FirstName');
    // console.warn(imgProfile);
  
    
    return (
      <View>
        <Text>dd</Text>
        <Image
          style={{ 
            width: 100, height: 50, 
          }}
          source={{ uri: birdImage }}
        />
        {/* <Text>{getData}</Text> */}

        <Button title="Click" onPress={this.handlePress} />
      </View>
    );
  }
}

export default HomeScreen;