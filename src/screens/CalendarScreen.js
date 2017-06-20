import React from 'react';

import Calendar from '../containers/Calendar';
import BackgroundWrapper from '../components/BackgroundWrapper';

import { IconsMap } from '../assets/icons';


const CalendarScreen = props => (
  <BackgroundWrapper>
    <Calendar {...props} />
  </BackgroundWrapper>
);


CalendarScreen.navigatorButtons = {
  leftButtons: [{
    id: 'menu',
    icon: IconsMap.menu,
  }],
};

CalendarScreen.navigatorStyle = {
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


export default CalendarScreen;
