import { SIGNUP_REQUESTING } from "./constants"

export const signupRequest = ({response, channel}) => {
	console.log("called")
	return {
		type: SIGNUP_REQUESTING,
		response,
		channel
	}
}
