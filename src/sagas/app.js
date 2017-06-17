import { spawn } from 'redux-saga/effects';
import codePush from 'react-native-code-push';
import codePushSaga from 'react-native-code-push-saga';


function* main() {
  yield spawn(codePushSaga, {
    syncOnInterval: 0, // e.g. 5 * 60 check every 5 minutes.
    syncOptions: {
      installMode: codePush.InstallMode.ON_NEXT_RESUME
    }
  });
}

export default [
  main,
];
