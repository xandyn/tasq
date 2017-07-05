import { eventChannel } from 'redux-saga';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin';

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

    signIn: (token) => {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      return firebase.auth().signInWithCredential(credential).then(
        user => ({ user }),
        error => ({ error })
      );
    }
  };

  static google = {
    configure: () => GoogleSignin.configure({
      webClientId: '686213809052-fqhsengcil9vq2f0se9u9oekcvor018h.apps.googleusercontent.com',
      iosClientId: '686213809052-5gp0hfpm57e5or27t5iv877fatb7c76r.apps.googleusercontent.com',
    }).then(
      result => ({ result }),
      error => ({ error })
    ),

    getUserData: () => GoogleSignin.signIn().then(
      data => ({ data }),
      error => ({ error })
    ),

    signIn: (token) => {
      const credential = firebase.auth.GoogleAuthProvider.credential(token);
      return firebase.auth().signInWithCredential(credential).then(
        user => ({ user }),
        error => ({ error })
      );
    }
  };
}
