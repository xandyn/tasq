import { StyleSheet } from 'react-native';
import BaseStyles from '../../styles/Base';


export default StyleSheet.create({
  container: {
    width: '100%',
    height: 125,
    backgroundColor: 'transparent',
    ...BaseStyles.flexRow,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrow: {
    opacity: 0.5,
    height: 125,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  month: {
    ...BaseStyles.text,
    fontSize: 32,
    fontWeight: '300',
    letterSpacing: 0.5,
    fontFamily: 'Avenir'
  },
  year: {
    ...BaseStyles.text,
    fontSize: 11,
    opacity: 0.5,
    letterSpacing: 1,
  },
});
