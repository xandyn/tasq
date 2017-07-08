import { StyleSheet, Platform } from 'react-native';
import BaseStyles from '../../styles/Base';


export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: '100%',
  },
  description: {
    height: 125,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  descriptionInput: {
    ...BaseStyles.input,
    ...Platform.select({
      ios: { height: 35 },
      android: { height: 60 }
    }),
    width: '100%',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 32,
    fontFamily: 'Avenir',
  },
  descriptionLabel: {
    fontSize: 11,
    opacity: 0.5
  },
  icon: {
    opacity: 0.5,
    marginRight: 25,
  },
  label: {
    fontSize: 11,
  },
  date: {
    width: '70%',
    height: 40,
    marginBottom: 10,
    paddingLeft: 0,
    justifyContent: 'center',
  },
  dateText: {
    ...BaseStyles.input,
    fontSize: 15,
  },
  input: {
    ...BaseStyles.input,
    fontSize: 15,
    width: '70%',
    height: 40,
    marginBottom: 10,
    paddingLeft: 0,
  },
  formControl: {
    width: '100%',
    marginVertical: 20,
  },
  formGroup: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingHorizontal: 25,
    marginTop: 20,
  },
  inputGroup: {
    flex: 1,
  },
});
