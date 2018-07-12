import React from "react"
import { Switch, Route } from "react-router-dom"
import importedComponent from "react-imported-component"

import Header from "./header"
import Home from "./components/Home"
import Loading from "./components/Loading"
import SigninModal from "./modal"

const AsyncNoMatch = importedComponent(() =>
	import(/* webpackChunkName:'NoMatch' */ "./components/NoMatch"), {
	LoadingComponent: Loading
})


const App = () => {
	return (
		<div>
			<Header/>
			<SigninModal/>
			<Switch>
				<Route exact path="/" component={ Home }/>
				<Route component={ AsyncNoMatch }/>
			</Switch>
		</div>
	)
}

export default App
