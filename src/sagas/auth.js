import { eventChannel } from 'redux-saga';
import { call, take } from 'redux-saga/effects';

import firebase from '../Firebase';


function authStateChannel() {
  if (this.channel) return this.channel;

  const channel = eventChannel(emit =>
    firebase.auth().onAuthStateChanged(
      user => emit({ user }),
      error => emit({ error })
    )
  );

  this.channel = channel;
  return channel;
}


export function* syncUser() {
  const authChannel = yield call(authStateChannel);

  while (true) {
    const { user, error } = yield take(authChannel);
    if (user) {
      yield call(console.log, user);
    } else {
      yield call(console.log, error);
    }
  }
}


export default [
  syncUser,
];
