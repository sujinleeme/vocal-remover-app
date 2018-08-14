import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import 'regenerator-runtime/runtime';
import { PersistGate } from 'redux-persist/integration/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import configureStore from './configureStore';
import App from './App';
import './index.css';
import history from './history';


const render = async (Component) => {
  const { store, persistor } = await configureStore();
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Component />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// Add fontawesome
library.add(fab);

if (module.hot) module.hot.accept('./App', () => render(App));
