import { eventChannel } from 'redux-saga';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import firebase from './index';


export default class Auth {
  static channel() {
    if (this.authChannel) return this.authChannel;

    const authChannel = eventChannel(emit =>
      firebase.auth().onAuthStateChanged(
        user => emit({ user }),
        error => emit({ error })
      )
    );

    this.authChannel = authChannel;
    return authChannel;
  }

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

    signInWithCredential: credential => firebase.auth().signInWithCredential(credential).then(
      user => ({ user }),
      error => ({ error })
    )
  };
}
