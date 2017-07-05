import { Navigation } from 'react-native-navigation';

import BootScreen from './BootScreen';
import SpinnerScreen from './SpinnerScreen';
import LoginScreen from './LoginScreen';
import SideMenu from './SideMenu';
import HomeScreen from './HomeScreen';
import CalendarScreen from './CalendarScreen';
import TimelineScreen from './TimelineScreen';
import OverviewScreen from './OverviewScreen';
import NewTaskScreen from './NewTaskScreen';


export default function registerScreens(store, Provider) {
  Navigation.registerComponent('tasq.BootScreen', () => BootScreen, store, Provider);
  Navigation.registerComponent('tasq.SpinnerScreen', () => SpinnerScreen, store, Provider);
  Navigation.registerComponent('tasq.LoginScreen', () => LoginScreen, store, Provider);
  Navigation.registerComponent('tasq.SideMenu', () => SideMenu, store, Provider);
  Navigation.registerComponent('tasq.HomeScreen', () => HomeScreen, store, Provider);
  Navigation.registerComponent('tasq.CalendarScreen', () => CalendarScreen, store, Provider);
  Navigation.registerComponent('tasq.TimelineScreen', () => TimelineScreen, store, Provider);
  Navigation.registerComponent('tasq.OverviewScreen', () => OverviewScreen, store, Provider);
  Navigation.registerComponent('tasq.NewTaskScreen', () => NewTaskScreen, store, Provider);
}
