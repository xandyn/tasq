import { eventChannel } from 'redux-saga';
import { call, take, put, takeEvery } from 'redux-saga/effects';

import types, { isAuth, isAuthSkipped } from '../actions/auth';

import NavigationActions from '../Navigation';
import FirebaseAuth from '../firebase/auth';


function authStateChannel() {
  if (this.channel) return this.channel;

  const channel = eventChannel(emit =>
    FirebaseAuth.auth().onAuthStateChanged(
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


export function* authWithFacebook() {
  const { startLogin, getAccessToken, getCredential, signInWithCredential } = FirebaseAuth.facebook;
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
