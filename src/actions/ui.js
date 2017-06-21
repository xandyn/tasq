const types = {};


types.SET_SCREEN = 'ui/SET_SCREEN';
export function setScreen(payload) {
  return {
    type: types.SET_SCREEN,
    payload
  };
}


export default types;
