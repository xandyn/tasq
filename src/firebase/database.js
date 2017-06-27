import { eventChannel } from 'redux-saga';
import { call } from 'redux-saga/effects';

import firebase from './index';


class Database {
  static channel(path, event = 'value') {
    const ref = firebase.database().ref(path);
    return eventChannel((emit) => {
      const callback = ref.on(
        event,
        dataSnapshot => emit({
          snapshot: dataSnapshot,
          value: dataSnapshot.val()
        })
      );

      return () => ref.off(event, callback);
    });
  }

  static* read(path) {
    const ref = firebase.database().ref(path);
    const result = yield call([ref, ref.once], 'value');
    return result.val();
  }

  static* create(path, data) {
    const ref = firebase.database().ref(path);
    const result = yield call([ref, ref.push], data);
    return result.key;
  }

  static* write(path, data) {
    const ref = firebase.database().ref(path);
    yield call([ref, ref.set], data);
  }

  static* update(path, data) {
    const ref = firebase.database().ref(path);
    yield call([ref, ref.update], data);
  }

  static* remove(path) {
    const ref = firebase.database().ref(path);
    yield call([ref, ref.remove]);
  }
}


export default Database;
