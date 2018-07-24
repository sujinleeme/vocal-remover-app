import { LOG_IN, LOG_OUT, INIT, PREVIEW_SUCCESS } from "./constants"

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
			
		case PREVIEW_SUCCESS:
			return {
				text: "Ready to make your karaoke music? 🎵"
			}
		
		
		default:
			return initState
	}
}
