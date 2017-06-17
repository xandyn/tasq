import { StyleSheet } from 'react-native';
import BaseStyles from '../../styles/Base';
import Colors from '../../styles/Colors';


export const colors = Colors;
export default StyleSheet.create({
  item: {
    ...BaseStyles.flexRow,
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 25,
  },
  icon: {
    opacity: 0.6,
    marginRight: 25,
  },
  title: {
    ...BaseStyles.text,
    color: Colors.menu.text,
    fontSize: 15,
    letterSpacing: 0.2,
  }
});
