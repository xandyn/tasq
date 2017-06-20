import { StyleSheet } from 'react-native';
import BaseStyles from '../../styles/Base';
import Colors from '../../styles/Colors';


export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
  },
  btn: {
    ...BaseStyles.btn,
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    width: 55,
    borderRadius: 55,
    backgroundColor: Colors.pink,
  },
  lineVertical: {
    position: 'absolute',
    width: 1,
    height: 21,
    borderWidth: 0.5,
    borderColor: 'white',
  },
  lineHorizontal: {
    position: 'absolute',
    width: 21,
    height: 1,
    borderWidth: 0.5,
    borderColor: 'white',
  },
});
