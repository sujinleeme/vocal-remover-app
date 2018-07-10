import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import { applyMiddleware, createStore, compose } from "redux"
import { Provider } from "react-redux"
import { ConnectedRouter, routerMiddleware } from "react-router-redux"

import App from "./App"
import rootSagas from "./sagas"
import "./index.css"

import { createLogger } from "redux-logger"
import createSagaMiddleware from "redux-saga"
import history from "./history"
import rootReducer from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension"
import "regenerator-runtime/runtime"

const sagaMiddleware = createSagaMiddleware()
const historyMiddleware = routerMiddleware(history)
const logger = createLogger()
const middleware = [sagaMiddleware, logger, historyMiddleware]

const composeEnhancers =
	
	process.env.NODE_ENV !== "production" &&
	composeWithDevTools ?
		composeWithDevTools({
			features: {
				pause: true, // start/pause recording of dispatched actions
				lock: true, // lock/unlock dispatching actions and side effects
				persist: true, // persist states on page reloading
				export: true, // export history of actions in a file
				import: "custom", // import history of actions from a file
				jump: true, // jump back and forth (time travelling)
				skip: true, // skip (cancel) actions
				reorder: true, // drag and drop actions in the history list
				dispatch: true, // dispatch custom actions or action creators
				test: true // generate tests for the selected actions
			}
		}) : compose

const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(...middleware)
	)
)

// Begin our Index Saga
sagaMiddleware.run(rootSagas)

const render = Component =>
	ReactDOM.render(
		<AppContainer>
			<Provider store={ store }>
				<ConnectedRouter history={ history }>
					<Component/>
				</ConnectedRouter>
			</Provider>
		</AppContainer>,
		document.getElementById("root")
	)

render(App)

if (module.hot) module.hot.accept("./App", () => render(App))
