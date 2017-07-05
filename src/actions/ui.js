const types = {};


types.SET_SCREEN = 'ui/SET_SCREEN';
export function setScreen(payload, closeDrawer = false) {
  return {
    type: types.SET_SCREEN,
    payload,
    meta: { closeDrawer }
  };
}

types.SHOW_SPINNER = 'ui/SHOW_SPINNER';
export function showSpinner(payload) {
  return {
    type: types.SHOW_SPINNER,
    payload
  };
}

types.ENABLE_DRAWER = 'ui/ENABLE_DRAWER';
export function enableDrawer(payload) {
  return {
    type: types.ENABLE_DRAWER,
    payload
  };
}


export default types;
