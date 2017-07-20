import { StyleSheet, Platform } from 'react-native';
import BaseStyles from '../../styles/Base';
import Colors from '../../styles/Colors';


export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  week: {
    color: 'white',
    fontFamily: 'Avenir',
    fontWeight: '300',
    fontSize: 32,
    letterSpacing: 1,
  },
  date: {
    ...BaseStyles.text,
    fontSize: 11,
    opacity: 0.5,
    letterSpacing: 1,
    ...Platform.select({
      android: {
        marginTop: 5,
        opacity: 0.5
      },
      ios: { opacity: 0.7 }
    }),
  },
  tasks: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  tasksTodo: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'Avenir',
  },
  tasksTotal: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'white',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  tasksTotalText: {
    ...BaseStyles.text,
    fontSize: 13,
    color: Colors.primary,
    ...Platform.select({
      android: { opacity: 0.5 },
      ios: { opacity: 0.7 }
    }),
  },
  moon: {
    width: 120,
    height: 120,
    opacity: 0.7,
    marginVertical: 30,
  },
  emptyTasks: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTasksText: {
    ...BaseStyles.text,
    fontSize: 19,
    textAlign: 'center',
  }
});
