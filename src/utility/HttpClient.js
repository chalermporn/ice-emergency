import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import axios from 'axios';
import join from 'url-join';

const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use(async (config) => {
  if (!isAbsoluteURLRegex.test(config.url)) {
    // const jwtToken = await AsyncStorage.getItem('token');        
    // if (jwtToken != null) {
    //   config.headers = { 'x-access-token': jwtToken };
    // }
    config.url = join('http://122.155.9.76:8080', config.url);
    console.log('isAbsoluteURLRegex ok');
    console.log('config.url  :', config.url);
  }
  return config;
});

export const httpClient = axios;