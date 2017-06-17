import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import SideMenu from './SideMenu';
import LoginScreen from './LoginScreen';


export default function registerScreens(store, Provider) {
  Navigation.registerComponent('tasq.HomeScreen', () => HomeScreen, store, Provider);
  Navigation.registerComponent('tasq.SideMenu', () => SideMenu, store, Provider);
  Navigation.registerComponent('tasq.LoginScreen', () => LoginScreen, store, Provider);
}
