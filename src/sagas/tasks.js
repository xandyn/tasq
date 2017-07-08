import { put, call, select, take, takeEvery } from 'redux-saga/effects';

import appTypes from '../actions/app';
import types, { syncTasks } from '../actions/tasks';
import { getUserUid } from '../selectors/auth';

import Database from '../firebase/database';

import NavigationActions from '../Navigation';


export function* startSyncTasks() {
  const uid = yield select(getUserUid);
  let channel;
  try {
    channel = yield call(Database.channel, `tasks/${uid}`);
  } catch (error) {
    yield call(Database.create, `tasks/${uid}`);
    channel = yield call(Database.channel, `tasks/${uid}`);
  }

  while (true) {
    const { value: tasks } = yield take(channel);
    yield put(syncTasks(tasks));
  }
}

export function* createTask({ payload }) {
  const uid = yield select(getUserUid);
  yield call(Database.create, `tasks/${uid}`, payload);
  yield call(NavigationActions.pop, { animationType: 'fade' });
}


function* watchSyncStart() {
  yield takeEvery(appTypes.SYNC_START, startSyncTasks);
}

function* watchCreateTask() {
  yield takeEvery(types.CREATE_TASK, createTask);
}


export default [
  watchSyncStart,
  watchCreateTask,
];
