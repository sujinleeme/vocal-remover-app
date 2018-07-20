import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import { applyMiddleware, createStore, compose } from "redux"
import { Provider } from "react-redux"
import { ConnectedRouter, routerMiddleware } from "react-router-redux"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import configureStore from "./configureStore"
import { persistStore } from "redux-persist"

import App from "./App"
import rootSagas from "./sagas"
import "./index.css"

import { createLogger } from "redux-logger"
import createSagaMiddleware from "redux-saga"
import history from "./history"
import rootReducer from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension"
import "regenerator-runtime/runtime"
import { PersistGate } from "redux-persist/integration/react"

const render = async (Component) => {
  const {store, persistor} = await configureStore()
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
          <ConnectedRouter history={ history }>
            <Component/>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  )
}

render(App)

// Add fontawesome
library.add(fab)

if (module.hot) module.hot.accept("./App", () => render(App))
