import React from 'react';
import Login from '../containers/Login';
import BackgroundWrapper from '../components/BackgroundWrapper';


const LoginScreen = props => (
  <BackgroundWrapper>
    <Login {...props} />
  </BackgroundWrapper>
);


LoginScreen.navigatorStyle = {
  rootBackgroundImageName: 'Background',
  screenBackgroundColor: 'transparent',
  orientation: 'portrait',
  navBarHidden: true,
  statusBarColor: '#262430',
  statusBarTextColorScheme: 'light',
};


export default LoginScreen;
