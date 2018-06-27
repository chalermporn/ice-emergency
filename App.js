import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import FCM, { FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType } from 'react-native-fcm';

export default class App extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>
            Hello
        </Text>
        <Button
          title="Click"
          onPress={() => Alert.alert(
          'HeadTitle',
         'body',
         [
          { text: 'Ask me later', onPress: () => console.warn('Ask me later pressed') },
          { text: 'Cancel', onPress: () => console.warn('Cancel Pressed'), style: 'cancel' },
          { text: 'OK', onPress: () => console.warn('OK Pressed') },
        ],
        { cancelable: false },
         )}
        />
      </View>


    );
  }
}
let dd;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

FCM.requestPermissions().then(() => console.log('granted')).catch(() => console.log('notification permission rejected'));

FCM.getFCMToken().then((token) => {
  console.log(token);
  // store fcm token in your server
});

FCM.on(FCMEvent.Notification, async (notif) => {
  console.warn(notif);
  if (notif.opened_from_tray) {
    console.warn(notif.notification.body);
  }
});