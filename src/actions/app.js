const types = {};


types.APP_INITIALIZED = 'app/APP_INITIALIZED';
export function appInitialized() {
  return {
    type: types.APP_INITIALIZED
  };
}


export default types;
