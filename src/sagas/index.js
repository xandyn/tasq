import { spawn } from 'redux-saga/effects';

import app from './app';
import lists from './lists';
import ui from './ui';

const sagas = [
  ...app,
  ...lists,
  ...ui,
];

export default function* rootSaga() {
  yield sagas.map(saga => spawn(saga));
}
