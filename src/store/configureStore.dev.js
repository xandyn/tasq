import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';
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
    composeWithDevTools(
      applyMiddleware(...middlewares),
      offline(offlineConfig)
    )
  );

  let rootTask = sagaMiddleware.run(rootSaga);
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
    module.hot.accept('./sagas', () => {
      rootTask.cancel();
      rootTask = sagaMiddleware.run(rootSaga);
    });
  }
  return store;
}

export default configureStore;
