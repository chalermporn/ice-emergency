import { AsyncStorage } from 'react-native';

export const storeSaveData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log('keyCatch: ', key);
    console.log('rec: ', data);
  }
};
export const retrieveData = async (key) => {
  try {
    let value = await AsyncStorage.getItem(key);
    if (value === null) {
      value = dataStore.find(e => e.title === key);
      await storeSaveData(key, value);
    }
    return JSON.parse(value);
  } catch (error) {
    const cards = dataStore.find(e => e.title === key);
    return cards;
  }
};

export default loadProfile = async (itemKey) => {
  const savedProfle = await AsyncStorage.getItem('myProfile');
  const myprofile = JSON.parse(savedProfle);
  if (myprofile !== null && myprofile[itemKey] !== null) {
    console.log(`loadProfile item:${itemKey} value: ${myprofile[itemKey]}`);
    return myprofile[itemKey];
  }
  return '';
};
export const retrieveAllData = async () => {
  try {
    const allKeys = await AsyncStorage.getAllKeys().then(keys => keys);

    if (allKeys === null || allKeys.length === 0) {
      await AsyncStorage.multiSet([['React', JSON.stringify(dataStore[0])], ['JavaScript', JSON.stringify(dataStore[1])]]);
    }

    
    receive = await AsyncStorage.multiGet(allKeys).then(data => data);

    const result = receive.map((r, i, a) => {
      const value = JSON.parse(a[i][1]);
      return value;
    });
   
    return result;
  } catch (error) {
    console.log('error: ', error);
    const cards = dataStore;
    return cards;
  }
};

