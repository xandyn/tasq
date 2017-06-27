import { LoginManager, AccessToken } from 'react-native-fbsdk';

import firebase from './index';


export default class Auth {
  static auth = firebase.auth;

  static facebook = {
    startLogin: () => LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      result => ({ result }),
      error => ({ error })
    ),

    getAccessToken: () => AccessToken.getCurrentAccessToken().then(
      data => ({ data }),
      error => ({ error })
    ),

    getCredential: token => firebase.auth.FacebookAuthProvider.credential(token),

    signInWithCredential: credential => Auth.auth().signInWithCredential(credential).then(
      user => ({ user }),
      error => ({ error })
    )
  };
}
