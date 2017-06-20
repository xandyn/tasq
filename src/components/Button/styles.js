import { StyleSheet } from 'react-native';
import BaseStyles from '../../styles/Base';


export default StyleSheet.create({
  btn: {
    ...BaseStyles.btn,
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  btnText: {
    ...BaseStyles.text,
    opacity: 1,
  }
});
