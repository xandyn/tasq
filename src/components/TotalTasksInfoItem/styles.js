import { StyleSheet } from 'react-native';
import BaseStyles from '../../styles/Base';
import Colors from '../../styles/Colors';


export const colors = Colors;
export default StyleSheet.create({
  item: {
    ...BaseStyles.flexRow,
    width: '100%',
    height: 135,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%'
  },
  graph: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  textContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: 10,
  },
  number: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'Avenir',
    fontWeight: '300',
    letterSpacing: 0.5,
  },
  icon: {
    opacity: 0.5,
    padding: 20,
    justifyContent: 'center',
  }
});
