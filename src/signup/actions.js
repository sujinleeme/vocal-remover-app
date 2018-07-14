import { SIGNUP_REQUESTING, LOGOUT } from "./constants"

export const signupRequest = ({response, channel}) => {
	return {
		type: SIGNUP_REQUESTING,
		response,
		channel
	}
}

export const logout = () => {
	return {
		type: LOGOUT,
		response
	}
}


