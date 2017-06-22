import React from 'react';

import Overview from '../containers/Overview';
import BackgroundWrapper from '../components/BackgroundWrapper';

import { IconsMap } from '../assets/icons';


const OverviewScreen = props => (
  <BackgroundWrapper>
    <Overview {...props} />
  </BackgroundWrapper>
);


OverviewScreen.navigatorButtons = {
  leftButtons: [{
    id: 'menu',
    icon: IconsMap.menu,
  }],
  rightButtons: [{
    id: 'search',
    icon: IconsMap.search
  }]
};

OverviewScreen.navigatorStyle = {
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


export default OverviewScreen;
