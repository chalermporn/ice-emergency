import React, { Component } from 'react';
import { View, Text } from 'react-native';

class VitalInfoScreen extends Component {
  render() {
    return (
      <View>
        <Text>On VitalInfoScreen</Text>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  places: state.places.places,
});


export default VitalInfoScreen;