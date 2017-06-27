const types = {};


types.SET_SCREEN = 'ui/SET_SCREEN';
export function setScreen(payload, closeDrawer = false) {
  return {
    type: types.SET_SCREEN,
    payload,
    meta: { closeDrawer }
  };
}


export default types;
