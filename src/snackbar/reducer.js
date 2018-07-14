import { SNACKBAR_REQUESTING, SNACKBAR_SUCCESS, SNACKBAR_FAIL } from "./constants"

const initialState = {
	snackbarOpen: false,
	snackbarType: null,
	requesting: false,
	successful: false,
	errors: []
}

const reducer = (state = initialState, action) => {
	
	switch (action.type) {
		case SNACKBAR_REQUESTING:
			return {
				...state,
				requesting: true
			}
		
		case SNACKBAR_SUCCESS:
			return {
				...state,
				snackbarOpen: action.snackbarOpen,
				snackbarType: action.snackbarType,
				requesting: false,
				successful: true
			}
		
		case SNACKBAR_FAIL:
			return {
				snackbarOpen: null,
				snackbarType: null,
				errors: state.errors.concat([{
					body: action.error.toString(),
					time: new Date()
				}]),
				requesting: false,
				successful: false
			}
		
		default:
			return state
	}
}

export default reducer
