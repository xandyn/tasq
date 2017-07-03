import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import registerScreens from './screens';
import configureStore from './store/configureStore';


const store = configureStore();

registerScreens(store, Provider);


const startApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'tasq.LoginScreen'
    },
    drawer: {
      left: { screen: 'tasq.SideMenu' }
    },
    animationType: 'fade',
    appStyle: {
      orientation: 'portrait',
      statusBarColor: '#262430',
      statusBarTextColorScheme: 'light',
      navBarTextColor: 'white',
      navBarTextFontFamily: 'Avenir-Book',
      navBarButtonColor: 'white',
      navBarTitleTextCentered: true,
    }
  });
};

export default startApp;
