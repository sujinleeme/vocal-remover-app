import React from "react"
import { Switch, Route } from "react-router-dom"
import importedComponent from "react-imported-component"

import Header from "./header"
import Home from "./pages/Home"
import Loading from "./components/Loading"
import SigninModal from "./modal"
import SnackBar from "./snackbar"


const MyPage = importedComponent(() =>
	import(/* webpackChunkName:'NoMatch' */ "./pages/MyPage"), {
	LoadingComponent: Loading
})

const AsyncNoMatch = importedComponent(() =>
	import(/* webpackChunkName:'NoMatch' */ "./components/NoMatch"), {
	LoadingComponent: Loading
})


const App = () => {
	return (
		<div>
			<Header/>
			<SigninModal/>
			<SnackBar />
			<Switch>
				<Route exact path="/" component={ Home }/>
				<Route exact path="/me" component={ MyPage }/>
				<Route exact path="/upload" component={ MyPage }/>
				<Route component={ AsyncNoMatch }/>
			</Switch>
		</div>
	)
}

export default App
