import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { offline } from 'redux-offline';
import offlineConfig from '../config/offlineConfig';
import rootSaga from '../sagas';
import rootReducer from '../reducers';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  sagaMiddleware
];


function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      offline(offlineConfig)
    )
  );

  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
