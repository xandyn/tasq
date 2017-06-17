import { put, takeLatest } from 'redux-saga/effects';

import types, { listsFill, listsFetching } from '../actions/lists';


export function* fetchLists() {
  yield put(listsFetching(true));

  const payload = {
    ids: [1, 2],
    map: {
      1: { id: 1, test: 'test' },
      2: { id: 2, test: 'test' }
    }
  };
  yield put(listsFill(payload));

  yield put(listsFetching(false));
}


export function* watchFetchLists() {
  yield takeLatest(types.FETCH_LISTS, fetchLists);
}


export default [
  watchFetchLists,
];
