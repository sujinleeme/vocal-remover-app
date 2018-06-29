import { AppContainer } from "react-hot-loader"
import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { Provider } from "react-redux"
import store from "./store"
import history from "./history"
import { ConnectedRouter } from "react-router-redux"

import "./index.css"

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
if (module.hot) module.hot.accept("./components/App", () => render(App))
