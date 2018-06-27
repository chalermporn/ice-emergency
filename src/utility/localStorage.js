import { AsyncStorage } from 'react-native';

async function getItem(item) {
  // response = await AsyncStorage.getItem(item);
  const response = await AsyncStorage.getItem(item);
  console.log(`getItem:${response}`);
}

async function saveItem(itemkey, itemvalue) {
  // console.log('saveItem');
  // console.log(itemkey);
  // console.log(itemvalue);
  await AsyncStorage.setItem(itemkey, itemvalue);
}

export const saveProfile = (profile) => {
  console.log('saveProfile');
  const yourProfile = JSON.parse(profile);
  /*eslint-disable*/
  for (const itemkey in yourProfile) {
    // console.log(`Key: ${key}`);
    // console.log(yourProfile[key]);
    saveItem(itemkey, yourProfile[itemkey]);
  }
};

export const loadProfile = (item) =>{
  console.log(`loadProfile:${item}`);
  let res1 = getItem(item)
  console.log(`loadProfile1:${res1}`);
  return res1;
};
