import { SNACKBAR_REQUESTING } from "./constants"

export const snackbarRequest = ({snackbarType, snackbarOpen}) => {
	return {
		type: SNACKBAR_REQUESTING,
		snackbarType,
		snackbarOpen
	}
}
