import { call, takeEvery } from 'redux-saga/effects';

import types from '../actions/ui';
import NavigationActions from '../Navigation';


export function* screenSet({ payload, meta: { closeDrawer } }) {
  yield call(NavigationActions.resetTo, {
    screen: `tasq.${payload}`,
    animationType: 'fade'
  });
  if (closeDrawer) {
    yield call(NavigationActions.toggleDrawer, {
      side: 'left',
      to: 'closed'
    });
  }
}


export function* spinnerShow({ payload }) {
  if (payload) {
    yield call(NavigationActions.showLightBox, {
      screen: 'tasq.SpinnerScreen',
      style: {
        backgroundBlur: 'light',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      }
    });
  } else {
    yield call(NavigationActions.dismissLightBox);
  }
}


export function* drawerEnable({ payload }) {
  yield call(NavigationActions.setDrawerEnabled, {
    side: 'left',
    enabled: payload
  });
}


export function* watchSetScreen() {
  yield takeEvery(types.SET_SCREEN, screenSet);
}

export function* watchShowSpinner() {
  yield takeEvery(types.SHOW_SPINNER, spinnerShow);
}

export function* watchEnableDrawer() {
  yield takeEvery(types.ENABLE_DRAWER, drawerEnable);
}


export default [
  watchSetScreen,
  watchShowSpinner,
  watchEnableDrawer,
];
