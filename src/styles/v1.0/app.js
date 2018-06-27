import { StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE, 
  },
  welcome: {
    margin: 10,
    fontSize: 20,
    color: COLOR_BLACK, 
    textAlign: 'center', 
  },
  instructions: {
    marginBottom: 5,
    color: COLOR_BLACK, 
    textAlign: 'center', 
  },
  buttonWithBackground: {

  },
  defaltText: {
    fontFamily: KANIT00,
  },
  defaltTextBold: {
    fontFamily: KANIT01,
  },
});

export default styles;