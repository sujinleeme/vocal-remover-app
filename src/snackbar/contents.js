import { LOG_OUT } from "./constants"

export const snackbarContents = ({type}) => {
	const initState = {
		text: ""
	}
	
	switch (type) {
		case LOG_OUT:
			return {
				text: "Log out successfully."
			}
			
		default:
			return initState
	}
}
