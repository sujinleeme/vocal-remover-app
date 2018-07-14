import {
	SIGNUP_REQUESTING,
	SIGNUP_SUCCESS,
	SIGNUP_ERROR,
	SIGNUP_CANCEL
} from "./constants"

const initialState = {
	requesting: false,
	successful: false,
	messages: [],
	errors: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGNUP_REQUESTING:
			return {
				requesting: true,
				successful: false,
				messages: [{body: "Signing up...", time: new Date()}],
				errors: []
			}
		
		// reset the state and add a body message of success!
		// remember our successful returned payload will be:
		// Successful?  Reset the login state.
		
		case SIGNUP_SUCCESS:
			return {
				requesting: false,
				successful: true,
				errors: [],
				messages: [{
					body: `Successfully created account for ${action.response}`,
					time: new Date()
				}],
			}
		
		// reset the state but with errors!
		// the error payload returned is actually far
		// more detailed, but we'll just stick with
		// the base message for now
		case SIGNUP_ERROR:
			return {
				errors: state.errors.concat([{
					body: action.error.toString(),
					time: new Date()
				}]),
				messages: [],
				requesting: false,
				successful: false
			}
		
		case SIGNUP_CANCEL:
			return {
				errors: state.errors.concat([{
					body: `Cancel signup: ${action.response.status}`,
					time: new Date()
				}]),
				messages: [],
				requesting: false,
				successful: false
			}
			
		
		
		default:
			return state
	}
}

export default reducer
