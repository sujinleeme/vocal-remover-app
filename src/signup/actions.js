import { SIGNUP_REQUESTING } from "./constants"

export const signupRequest = ({response, channel}) => {
	return {
		type: SIGNUP_REQUESTING,
		response,
		channel
	}
}
