import { StyleSheet } from 'react-native';
import * as defaultStyle from '../defaultStyles';


export default function getStyle(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    base: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      ...appStyle.dayContainerStyle,
    },
    text: {
      fontSize: 15,
      color: 'white',
      backgroundColor: 'transparent',
      ...appStyle.dayTextStyle,
    },
    selected: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: 50,
      ...appStyle.selectedDayStyle,
    },
    todayText: {
      ...appStyle.todayTextStyle,
    },
    selectedText: {
      ...appStyle.selectedTextStyle,
    },
    disabledText: {
      color: 'rgba(255, 255, 255, 0.5)',
      ...appStyle.disabledTextStyle,
    },
    dot: {
      position: 'absolute',
      width: 5,
      height: 5,
      bottom: 8,
      backgroundColor: 'transparent',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.5)',
      ...appStyle.dotStyle,
    },
  });
}
