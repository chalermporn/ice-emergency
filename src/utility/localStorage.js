import { AsyncStorage } from 'react-native';

export default loadProfile = async (itemKey) => {
  const savedProfle = await AsyncStorage.getItem('myProfile');
  const myprofile = JSON.parse(savedProfle);
  if (myprofile !== null && myprofile[itemKey] !== null) {
    console.log(`loadProfile item:${itemKey} value: ${myprofile[itemKey]}`);
    return myprofile[itemKey];
  }
  return '';
};
