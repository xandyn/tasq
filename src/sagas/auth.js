import { call, take, put, takeEvery } from 'redux-saga/effects';

import types, { syncProfile, isAuth, isAuthSkipped } from '../actions/auth';

import NavigationActions from '../Navigation';
import Database from '../firebase/database';
import Auth from '../firebase/auth';


export function* syncUser() {
  const authChannel = yield call(Auth.channel);

  while (true) {
    const { user, error } = yield take(authChannel);
    if (user) {
      const userData = {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL
      };
      yield call(Database.update, `profiles/${user.uid}`, userData);
      yield put(syncProfile(userData));
    } else {
      yield call(console.log, error);
    }
  }
}


export function* authWithFacebook() {
  const { startLogin, getAccessToken, getCredential, signInWithCredential } = Auth.facebook;
  const { result } = yield call(startLogin);
  if (!result || (result && result.isCancelled)) return;

  const { data } = yield call(getAccessToken);
  if (!data) return;

  const credential = yield call(getCredential, data.accessToken);
  const { user } = yield call(signInWithCredential, credential);
  if (!user) return;

  yield put(isAuth(true));
}


export function* authWithGoogle() {
  // yield put(isAuth(true));
}


export function* authSkip() {
  yield put(isAuth(false));
  yield put(isAuthSkipped(true));
  yield call(NavigationActions.resetTo, {
    screen: 'tasq.HomeScreen',
    animationType: 'fade'
  });
}


function* watchAuthWithFacebook() {
  yield takeEvery(types.AUTH_WITH_FACEBOOK, authWithFacebook);
}


function* watchAuthWithGoogle() {
  yield takeEvery(types.AUTH_WITH_GOOGLE, authWithGoogle);
}

function* watchAuthSkip() {
  yield takeEvery(types.AUTH_SKIP, authSkip);
}


export default [
  syncUser,
  watchAuthWithFacebook,
  watchAuthWithGoogle,
  watchAuthSkip,
];
