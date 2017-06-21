import { call, takeEvery } from 'redux-saga/effects';

import types from '../actions/ui';
import NavigationActions from '../Navigation';


export function* screenSet({ payload }) {
  yield call(NavigationActions.resetTo, {
    screen: `tasq.${payload}`,
    animationType: 'fade'
  });
  yield call(NavigationActions.toggleDrawer, {
    side: 'left',
    to: 'closed'
  });
}


export function* watchSetScreen() {
  yield takeEvery(types.SET_SCREEN, screenSet);
}


export default [
  watchSetScreen,
];
