import React from 'react';
import { View } from 'react-native';


const BootScreen = props => <View style={{ backgroundColor: 'white' }} {...props} />;


BootScreen.navigatorStyle = {
  orientation: 'portrait',
  screenBackgroundColor: 'white',
  navBarHidden: true,
  statusBarTextColorScheme: 'dark',
};


export default BootScreen;
