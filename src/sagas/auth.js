import { AsyncStorage } from 'react-native';
import { all, call, take, put, takeLatest } from 'redux-saga/effects';

import { syncStart } from '../actions/app';
import types, { syncProfile, clearProfile, isAuth, isAuthSkipped } from '../actions/auth';
import { clearTasks } from '../actions/tasks';
import { setScreen, showSpinner } from '../actions/ui';

import Database from '../firebase/database';
import Auth from '../firebase/auth';


export function* syncUser() {
  const authChannel = yield call(Auth.channel);

  while (true) {
    const { user, error } = yield take(authChannel);
    if (user) {
      const userData = {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL
      };
      yield call(Database.update, `profiles/${user.uid}`, userData);
      yield put(syncProfile(userData));
      yield put(syncStart());
    } else {
      yield call(console.log, error);
    }
  }
}

function* authComplete() {
  yield all([
    put(isAuth(true)),
    put(setScreen('HomeScreen'))
  ]);
}

export function* authWithFacebook() {
  const { startLogin, getAccessToken, signIn } = Auth.facebook;
  const { result } = yield call(startLogin);
  if (!result || (result && result.isCancelled)) return;

  const { data } = yield call(getAccessToken);
  if (!data) return;

  yield put(showSpinner(true));
  const { user } = yield call(signIn, data.accessToken);
  yield put(showSpinner(false));
  if (!user) return;

  yield call(authComplete);
}


export function* authWithGoogle() {
  const { configure, getUserData, signIn } = Auth.google;

  yield call(configure);

  const { data } = yield call(getUserData);
  if (!data) return;

  yield put(showSpinner(true));
  const { user } = yield call(signIn, data.idToken);
  yield put(showSpinner(false));
  if (!user) return;

  yield call(authComplete);
}


export function* authSkip() {
  yield put(isAuth(false));
  yield put(isAuthSkipped(true));
  yield put(setScreen('HomeScreen'));
}


function* watchAuthWithFacebook() {
  yield takeLatest(types.AUTH_WITH_FACEBOOK, authWithFacebook);
}


function* watchAuthWithGoogle() {
  yield takeLatest(types.AUTH_WITH_GOOGLE, authWithGoogle);
}


function* watchAuthSkip() {
  yield takeLatest(types.AUTH_SKIP, authSkip);
}


function* watchLogout() {
  while (yield take(types.LOGOUT)) {
    yield call(Auth.logout);
    yield put(clearProfile());
    yield put(clearTasks());
    yield call(AsyncStorage.multiRemove, [
      'reduxPersist:offline',
      'reduxPersist:tasks',
      'reduxPersist:auth',
      'reduxPersist:ui',
    ]);
    yield put(setScreen('LoginScreen', true));
  }
}


export default [
  syncUser,
  watchAuthWithFacebook,
  watchAuthWithGoogle,
  watchAuthSkip,
  watchLogout,
];
