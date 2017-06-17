import { fork } from 'redux-saga/effects';

import app from './app';
import lists from './lists';

const sagas = [
  ...app,
  ...lists,
];

export default function* rootSaga() {
  yield sagas.map(saga => fork(saga));
}
