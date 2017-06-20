import { Navigation } from 'react-native-navigation';

import LoginScreen from './LoginScreen';
import SideMenu from './SideMenu';
import HomeScreen from './HomeScreen';
import CalendarScreen from './CalendarScreen';


export default function registerScreens(store, Provider) {
  Navigation.registerComponent('tasq.LoginScreen', () => LoginScreen, store, Provider);
  Navigation.registerComponent('tasq.SideMenu', () => SideMenu, store, Provider);
  Navigation.registerComponent('tasq.HomeScreen', () => HomeScreen, store, Provider);
  Navigation.registerComponent('tasq.CalendarScreen', () => CalendarScreen, store, Provider);
}
