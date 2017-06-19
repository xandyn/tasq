import { StyleSheet, Platform } from 'react-native';
import BaseStyles from '../../styles/Base';
import Colors from '../../styles/Colors';


export default StyleSheet.create({
  header: {
    ...BaseStyles.flexRow,
    ...Platform.select({
      ios: {
        marginTop: 45
      }
    }),
    margin: 25,
  },
  avatar: {
    height: 50,
    width: 50,
    marginRight: 20,
  },
  info: {
    justifyContent: 'space-around',
  },
  name: {
    ...BaseStyles.text,
    flexShrink: 1,
    color: Colors.menu.text,
    fontSize: 20,
    fontFamily: 'Avenir',
  },
  email: {
    ...BaseStyles.text,
    flexShrink: 1,
    color: Colors.menu.text,
    fontSize: 14,
    opacity: 0.6,
  },
});
