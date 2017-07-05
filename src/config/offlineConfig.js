import config from 'redux-offline/lib/defaults';
import Database from '../firebase/database';
import startApp from '../App';


const offlineConfig = {
  ...config,
  detectNetwork: callback => Database.detectNetwork(callback),
  effect: (effect, action) => Database.offlineFirebaseAction(action.type, effect),
  persistCallback: () => startApp(),
};


export default offlineConfig;
