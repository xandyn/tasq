import { spawn, all } from 'redux-saga/effects';

import app from './app';
import auth from './auth';
import lists from './lists';
import ui from './ui';

const sagas = [
  ...app,
  ...auth,
  ...lists,
  ...ui,
];

export default function* rootSaga() {
  yield all(sagas.map(saga => spawn(saga)));
}
