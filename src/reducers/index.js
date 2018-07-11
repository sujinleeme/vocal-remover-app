import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import signup from '../sign-up/reducer'
import modal from "../modal/reducer"
export default combineReducers({
	routing: routerReducer,
	signup,
	modal
})

