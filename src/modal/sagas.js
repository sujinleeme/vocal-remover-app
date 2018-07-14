import { put, takeEvery } from "redux-saga/effects"
import { MODAL_REQUESTING, MODAL_SUCCESS, MODAL_FAIL } from "./constants"

function* modalFlow(action) {
	try {
		const { modalOpen, modalType } = action
		yield put({ type: MODAL_SUCCESS, modalOpen, modalType })
	}
	catch (error) {
		yield put({ type: MODAL_FAIL, error })
	}
}

function* modalWatcher() {
	yield takeEvery(MODAL_REQUESTING, modalFlow)
}

export default modalWatcher
