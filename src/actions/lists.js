const types = {};


types.FILL_LISTS = 'lists/FILL_LISTS';
export function listsFill(payload) {
  return {
    type: types.FILL_LISTS,
    payload
  };
}

types.FETCH_LISTS = 'lists/FETCH_LISTS';
export function listsFetch(payload) {
  return {
    type: types.FETCH_LISTS,
    payload
  };
}

types.FETCH_LISTS_STATE = 'lists/FETCH_LISTS_STATE';
export function listsFetching(payload) {
  return {
    type: types.FETCH_LISTS_STATE,
    payload
  };
}


export default types;
