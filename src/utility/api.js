import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { saveProfile, loadProfile } from './localStorage';

const baseUrl = 'http://122.155.9.76:8080';

/* eslint-disable */
export const apiLogin = (loginData) => {
  // console.log('Login Request:' + JSON.stringify(loginData));
  const { username, password, noti_token } = loginData;

  axios.post(baseUrl+'/login',{username, password, noti_token})
    .then((res) => {
      if(res.data.success){
        //todo: save to localstorage
        console.log('login success');
        // console.log(res.data.message);
        // console.log(JSON.stringify(res.data));
        saveProfile(JSON.stringify(res.data));
        console.log('--------------')
      }else {
        console.log('login failed');
        console.log(res.data.message);
        console.log(JSON.stringify(res.data))
      }
    }).catch((err) => {
      console.log('Error catch');
      console.log(err);
    })


};