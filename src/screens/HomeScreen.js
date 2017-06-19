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
  orientation: 'portrait',
  rootBackgroundImageName: 'Background',
  screenBackgroundColor: 'transparent',
  navBarTransparent: true,
  navBarTranslucent: true,
  navBarTextColor: 'white',
  navBarTextFontFamily: 'Avenir-Book',
  navBarButtonColor: 'white',
  navBarTitleTextCentered: true,
  statusBarTextColorScheme: 'light',
};


export default HomeScreen;
