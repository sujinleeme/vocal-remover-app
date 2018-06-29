import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

const initialState = {
	file: []
}
const rootReducer = (state = initialState, action) => state

export default combineReducers({
	...rootReducer,
	routing: routerReducer
})

