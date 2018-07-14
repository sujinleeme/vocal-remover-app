import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import auth from "../signup/reducer"
import modal from "../modal/reducer"
import client from "../client/reducer"
export default combineReducers({
	routing: routerReducer,
	auth,
	modal,
	client
})

