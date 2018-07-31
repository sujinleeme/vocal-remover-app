import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import { persistStore, persistReducer } from 'redux-persist';
import rootSagas from './sagas';
import history from './history';
import rootReducer from './reducers';

const composeEnhancers = process.env.NODE_ENV !== 'production'
  && composeWithDevTools
  ? composeWithDevTools({
    features: {
      pause: true, // start/pause recording of dispatched actions
      lock: true, // lock/unlock dispatching actions and side effects
      persist: true, // persist states on page reloading
      export: true, // export history of actions in a file
      import: 'custom', // import history of actions from a file
      jump: true, // jump back and forth (time travelling)
      skip: true, // skip (cancel) actions
      reorder: true, // drag and drop actions in the history list
      dispatch: true, // dispatch custom actions or action creators
      test: true // generate tests for the selected actions
    }
  }) : compose;


const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const historyMiddleware = routerMiddleware(history);
  const logger = createLogger();
  const middlewares = [sagaMiddleware, logger, historyMiddleware];
  const persistConfig = {
    key: 'root',
    storage
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(
        persistReducer(persistConfig, nextRootReducer)
      );
    });
  }

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSagas);
  return { store, persistor };
};

export default configureStore;
