import React from "react"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import { ConnectedRouter } from "react-router-redux"
import importedComponent from "react-imported-component"

import Home from "./Home"
import Loading from "./Loading"
import Header from "./Header"


const Login = importedComponent(
	() => import(/* webpackChunkName:'Login' */ "./Login"),
	{
		LoadingComponent: Loading
	}
)
const AsyncNoMatch = importedComponent(
	() => import(/* webpackChunkName:'NoMatch' */ "./NoMatch"),
	{
		LoadingComponent: Loading
	}
)

const App = () => {
	return (
		<div>
			<Header/>
			<Switch>
				<Route exact path="/" component={ Home }/>
				<Route exact path="/login" component={ Login }/>
				<Route component={ AsyncNoMatch }/>
			</Switch>
		</div>
	)
}

export default App
