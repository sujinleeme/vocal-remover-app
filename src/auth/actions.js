import { SIGNUP_REQUESTING, LOGIN_REQUESTING } from "./constants"

export const signupRequest = ({response, channel}) => {
	return {
		type: SIGNUP_REQUESTING,
		response,
		channel
	}
}

export const signInRequest = ({response, channel}) => {
	return {
		type: LOGIN_REQUESTING,
		response,
		channel
	}
}
