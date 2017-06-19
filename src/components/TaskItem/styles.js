import { StyleSheet } from 'react-native';
import BaseStyles from '../../styles/Base';
import Colors from '../../styles/Colors';


export const colors = Colors;
export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  item: {
    ...BaseStyles.flexRow,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
  due: {
    ...BaseStyles.text,
    fontSize: 13,
    paddingRight: 25,
  },
  text: {
    ...BaseStyles.text,
    paddingRight: 25,
    flexShrink: 1,
  },
  color: {
    marginLeft: 'auto',
    width: 7,
    height: 7,
    borderRadius: 7,
  },
});
