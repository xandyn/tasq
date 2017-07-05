import React from 'react';

import Boot from '../containers/Boot';


const BootScreen = props => <Boot {...props} />;


BootScreen.navigatorStyle = {
  rootBackgroundImageName: 'Background',
  screenBackgroundColor: 'transparent',
  orientation: 'portrait',
  navBarHidden: true,
  statusBarTextColorScheme: 'dark',
};


export default BootScreen;
