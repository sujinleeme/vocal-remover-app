import React from "react"
import { Switch, Route } from "react-router-dom"
import importedComponent from "react-imported-component"

import Header from "./components/Header"
import Home from "./components/Home"
import Loading from "./components/Loading"

const Login = importedComponent(
	() => import(/* webpackChunkName:'Login' */ "./components/Login"),
	{
		LoadingComponent: Loading
	}
)
const AsyncNoMatch = importedComponent(
	() => import(/* webpackChunkName:'NoMatch' */ "./components/NoMatch"),
	{
		LoadingComponent: Loading
	}
)

const Signup = importedComponent(
	() => import(/* webpackChunkName:'Login' */ "./signup"),
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
				<Route exact path="/signup" component={ Signup }/>
				<Route exact path="/login" component={ Login }/>
				<Route component={ AsyncNoMatch }/>
			</Switch>
		</div>
	)
}

export default App
