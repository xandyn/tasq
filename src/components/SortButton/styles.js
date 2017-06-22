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
  line: {
    height: 1,
    marginVertical: 3,
    borderWidth: 0.5,
    borderColor: 'white',
  },
});
