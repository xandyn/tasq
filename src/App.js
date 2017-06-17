import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import registerScreens from './screens';
import configureStore from './store/configureStore';
import { IconsMap } from './assets/icons';


const store = configureStore();

registerScreens(store, Provider);


const startApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'tasq.LoginScreen',
      title: 'Welcome',
      navigatorButtons: {
        leftButtons: [{
          id: 'sideMenu',
          icon: IconsMap.menu
        }],
        rightButtons: [{
          id: 'search',
          title: 'Search',
          icon: IconsMap.search
        }],
      }
    },
    drawer: {
      left: {
        screen: 'tasq.SideMenu',
      },
    },
    animationType: 'fade',
  });
};

startApp();
