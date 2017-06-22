import React from 'react';

import Timeline from '../containers/Timeline';
import BackgroundWrapper from '../components/BackgroundWrapper';

import { IconsMap } from '../assets/icons';


const TimelineScreen = props => (
  <BackgroundWrapper>
    <Timeline {...props} />
  </BackgroundWrapper>
);


TimelineScreen.navigatorButtons = {
  leftButtons: [{
    id: 'menu',
    icon: IconsMap.menu,
  }],
  rightButtons: [{
    id: 'search',
    icon: IconsMap.search
  }]
};

TimelineScreen.navigatorStyle = {
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


export default TimelineScreen;
