import { put, call, fork, select, take } from 'redux-saga/effects';

import appTypes from '../actions/app';
import { syncTasks } from '../actions/tasks';
import { getUserUid } from '../selectors/auth';

import Database from '../firebase/database';


export function* startSyncTasks() {
  const uid = yield select(getUserUid);
  const channel = yield call(Database.channel, `tasks/${uid}`);

  while (true) {
    const { value: tasks } = yield take(channel);
    yield put(syncTasks(tasks));
  }
}


export function* watchSyncStart() {
  while (yield take(appTypes.SYNC_START)) {
    yield fork(startSyncTasks);
  }
}


export default [
  watchSyncStart,
];
