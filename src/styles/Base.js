import { Dimensions } from 'react-native';


const { width } = Dimensions.get('window');
const BaseStyles = {
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  btn: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 3,
    width: width * 0.85,
  },
  text: {
    color: 'white',
    fontFamily: 'Avenir-Book',
    fontSize: 16,
  },
  label: {
    color: 'white',
    fontFamily: 'Avenir-Book',
    fontSize: 12,
    letterSpacing: 1
  },
  input: {
    color: 'white',
    fontFamily: 'Avenir-Book',
    fontSize: 16,
  },
};

export default BaseStyles;
