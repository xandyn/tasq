import React from 'react';

import NewTask from '../containers/NewTask';
import BackgroundWrapper from '../components/BackgroundWrapper';

import { IconsMap } from '../assets/icons';


const NewTaskScreen = props => (
  <BackgroundWrapper>
    <NewTask {...props} />
  </BackgroundWrapper>
);


NewTaskScreen.navigatorButtons = {
  leftButtons: [{
    id: 'close',
    icon: IconsMap.close,
  }],
  rightButtons: [{
    id: 'save',
    icon: IconsMap.checkmark
  }]
};

NewTaskScreen.navigatorStyle = {
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


export default NewTaskScreen;
