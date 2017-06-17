import { StyleSheet, Platform } from 'react-native';
import BaseStyles from '../../styles/Base';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  logo: {
    width: 150,
    height: 150,
    ...Platform.select({
      ios: {
        marginTop: 100,
      },
      android: {
        marginTop: 50,
      }
    }),
  },
  credentials: {
    alignSelf: 'flex-end',
    marginBottom: 30,
    width: '100%',
  },
  icon: {
    opacity: 0.5,
    marginRight: 25,
  },
  input: {
    ...BaseStyles.input,
    width: '70%',
    height: 40,
    marginBottom: 10,
    paddingLeft: 0,
  },
  formControl: {
    width: '100%',
    marginBottom: 20,
  },
  formGroup: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingHorizontal: 25,
  },
  inputGroup: {
    flex: 1,
  }
});
