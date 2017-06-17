import React from 'react';

import Home from '../containers/Home';
import BackgroundWrapper from '../components/BackgroundWrapper';

import { IconsMap } from '../assets/icons';


const HomeScreen = props => (
  <BackgroundWrapper>
    <Home {...props} />
  </BackgroundWrapper>
);


HomeScreen.navigatorButtons = {
  leftButtons: [{
    id: 'menu',
    icon: IconsMap.menu,
  }],
};

HomeScreen.navigatorStyle = {
  rootBackgroundImageName: 'Background',
  screenBackgroundColor: 'transparent',
  drawUnderNavBar: true,
  navBarNoBorder: true,
  topBarElevationShadowEnabled: false,
  statusBarColor: '#262430',
  navBarTransparent: true,
  navBarTranslucent: true,
  navBarTextColor: 'white',
  navBarTextFontFamily: 'Avenir-Book',
  navBarButtonColor: 'white',
  navBarTitleTextCentered: true,
  statusBarTextColorScheme: 'light',
};


export default HomeScreen;
