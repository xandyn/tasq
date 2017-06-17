import { Platform } from 'react-native';


export const letterSpacing = (string, count = 1) =>
  Platform.OS === 'ios'
    ? string
    : string.split('').join('\u200A'.repeat(count));
