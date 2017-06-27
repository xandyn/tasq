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

types.AUTH_WITH_FACEBOOK = 'auth/AUTH_WITH_FACEBOOK';
export function authWithFacebook() {
  return {
    type: types.AUTH_WITH_FACEBOOK
  };
}

types.AUTH_WITH_GOOGLE = 'auth/AUTH_WITH_GOOGLE';
export function authWithGoogle() {
  return {
    type: types.AUTH_WITH_GOOGLE
  };
}

types.AUTH_SKIP = 'auth/AUTH_SKIP';
export function authSkip() {
  return {
    type: types.AUTH_SKIP
  };
}

types.SYNC_PROFILE = 'auth/SYNC_PROFILE';
export function syncProfile(payload) {
  return {
    type: types.SYNC_PROFILE,
    payload
  };
}


export default types;
