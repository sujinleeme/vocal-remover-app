import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import auth from '../auth/reducer'
import modal from "../modal/reducer"
export default combineReducers({
	routing: routerReducer,
	auth,
	modal
})

