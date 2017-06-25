const types = {};


types.CHANGE_AUTH_STATE = 'auth/CHANGE_AUTH_STATE';
export function isAuth(payload) {
  return {
    type: types.CHANGE_AUTH_STATE,
    payload
  };
}

types.CHANGE_AUTH_SKIPPED_STATE = 'auth/CHANGE_AUTH_SKIPPED_STATE';
export function isAuthSkipped(payload) {
  return {
    type: types.CHANGE_AUTH_SKIPPED_STATE,
    payload
  };
}


export default types;
