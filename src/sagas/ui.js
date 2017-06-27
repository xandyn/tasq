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


export function* watchSetScreen() {
  yield takeEvery(types.SET_SCREEN, screenSet);
}


export default [
  watchSetScreen,
];
