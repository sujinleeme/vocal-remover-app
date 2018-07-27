import { LOG_IN, LOG_OUT, INIT, PREVIEW_SUCCESS, FILE_NOT_ACCEPTED } from "./constants"

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
			
    case FILE_NOT_ACCEPTED:
      return {
        text: "This file does not seem to be an audio file. 😢"
      }
		
		
		default:
			return initState
	}
}
