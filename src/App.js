import React from "react"
import { Switch, Route } from "react-router-dom"
import importedComponent from "react-imported-component"

import Header from "./header"
import Footer from "./footer"
import Home from "./pages/Home"
import Loading from "./components/Loading"
import SigninModal from "./modal"
import SnackBar from "./snackbar"

const MyPage = importedComponent(() =>
  import(/* webpackChunkName:'MyPage' */ "./pages/MyPage"), {
  LoadingComponent: Loading
})

const AsyncNoMatch = importedComponent(() =>
  import(/* webpackChunkName:'NoMatch' */ "./components/NoMatch"), {
  LoadingComponent: Loading
})

const Upload = importedComponent(() =>
  import(/* webpackChunkName:'UploadPage' */ "./pages/UploadPage"), {
  LoadingComponent: Loading
})

const App = () => {
  return (
    <div style={{
      height: "100vh"
    }}>
      <Header/>
      <SigninModal/>
      <SnackBar/>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/me" component={ MyPage }/>
        <Route exact path="/upload" component={ Upload }/>
        <Route component={ AsyncNoMatch }/>
      </Switch>
      <Footer/>
    </div>
  )
}

export default App
