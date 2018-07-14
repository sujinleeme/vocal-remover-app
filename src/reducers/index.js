import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import signup from "../signup/reducer"
import modal from "../modal/reducer"
import client from "../client/reducer"
export default combineReducers({
	routing: routerReducer,
	client,
	modal,
	signup
})

