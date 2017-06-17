import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: window.width,
    height: window.height,
  },
});
