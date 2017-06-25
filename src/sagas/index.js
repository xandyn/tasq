import { spawn } from 'redux-saga/effects';

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
  yield sagas.map(saga => spawn(saga));
}
