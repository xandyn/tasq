const types = {};


types.APP_INITIALIZED = 'app/APP_INITIALIZED';
export function appInitialized() {
  return {
    type: types.APP_INITIALIZED
  };
}

types.SYNC_START = 'app/SYNC_START';
export function syncStart() {
  return {
    type: types.SYNC_START
  };
}


export default types;
