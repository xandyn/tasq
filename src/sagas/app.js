import { spawn, take, put, select } from 'redux-saga/effects';
import codePush from 'react-native-code-push';
import codePushSaga from 'react-native-code-push-saga';

import types from '../actions/app';
import { setScreen } from '../actions/ui';
import { getAuthState } from '../selectors/auth';
import { getScreen } from '../selectors/ui';


function* main() {
  while (yield take(types.APP_INITIALIZED)) {
    const isAuth = yield select(getAuthState);
    let screen = 'LoginScreen';
    if (isAuth) {
      screen = yield select(getScreen);
    }
    yield put(setScreen(screen));
  }
}


function* codePushWorker() {
  yield spawn(codePushSaga, {
    syncOnInterval: 0, // e.g. 5 * 60 check every 5 minutes.
    syncOptions: {
      installMode: codePush.InstallMode.ON_NEXT_RESUME
    }
  });
}


export default [
  main,
  codePushWorker,
];
