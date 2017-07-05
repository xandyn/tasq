import { Navigation } from 'react-native-navigation';


class NavigationActions {
  constructor() {
    this.navigator = Navigation;
  }

  setNavigator(navigator) {
    this.navigator = navigator;
  }

  push = params => this.navigator.push(params);
  pop = params => this.navigator.pop(params);
  popToRoot = params => this.navigator.popToRoot(params);
  resetTo = params => this.navigator.resetTo(params);
  toggleDrawer = params => this.navigator.toggleDrawer(params);
  showModal = params => this.navigator.showModal(params);
  dismissModal = params => this.navigator.dismissModal(params);
  dismissAllModals = params => this.navigator.dismissAllModals(params);
  showLightBox = params => this.navigator.showLightBox(params);
  dismissLightBox = params => this.navigator.dismissLightBox(params);
  setDrawerEnabled = params => this.navigator.setDrawerEnabled(params);
}


export default new NavigationActions();
