import { put, takeEvery } from "redux-saga/effects"
import { SNACKBAR_REQUESTING, SNACKBAR_SUCCESS, SNACKBAR_FAIL } from "./constants"

function* snackbarFlow(action) {
	try {
		const {snackbarOpen, snackbarType} = action
		yield put({type: SNACKBAR_SUCCESS, snackbarOpen, snackbarType})
	}
	catch (error) {
		yield put({type: SNACKBAR_FAIL, error})
	}
}

function* snackbarWatcher() {
	yield takeEvery(SNACKBAR_REQUESTING, snackbarFlow)
}

export default snackbarWatcher
