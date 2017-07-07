import { spawn, all } from 'redux-saga/effects';

import app from './app';
import auth from './auth';
import tasks from './tasks';
import ui from './ui';

const sagas = [
  ...app,
  ...auth,
  ...tasks,
  ...ui,
];

export default function* rootSaga() {
  yield all(sagas.map(saga => spawn(saga)));
}
