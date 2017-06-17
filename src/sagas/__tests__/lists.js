import sagaHelper from 'redux-saga-testing';
import { put } from 'redux-saga/effects';

import { listsFill, listsFetching } from '../../actions/lists';

import { fetchLists } from '../lists';


describe('`fetchLists` Saga test', () => {
  const it = sagaHelper(fetchLists());
  const payload = {
    ids: [1, 2],
    map: {
      1: { id: 1, test: 'test' },
      2: { id: 2, test: 'test' }
    }
  };

  it('change FETCH_STATE to `true`', (result) => {
    expect(result).toEqual(put(listsFetching(true)));
  });

  it('fill the lists', (result) => {
    expect(result).toEqual(put(listsFill(payload)));
  });

  it('change FETCH_STATE to `false`', (result) => {
    expect(result).toEqual(put(listsFetching(false)));
  });

  it('end.', (result) => {
    expect(result).toBeUndefined();
  });
});
