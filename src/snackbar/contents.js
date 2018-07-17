import { LOG_IN, LOG_OUT, INIT } from "./constants"

export const snackbarContents = ({type}) => {
	const initState = {
		text: ""
	}
	
	switch (type) {
		case INIT: {
			return {
				text: ""
			}
		}
		case LOG_IN:
			return {
				text: "Welcome! :D"
			}
		case LOG_OUT:
			return {
				text: "Log out successfully."
			}
			
		default:
			return initState
	}
}
