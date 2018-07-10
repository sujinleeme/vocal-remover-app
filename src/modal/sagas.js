import { call, put, takeLatest, takeEvery } from "redux-saga/effects"
import { MODAL_REQUESTING, MODAL_SUCCESS, MODAL_FAIL } from "./constants"

function* modalFlow(action) {
	console.log(action)
	try {
		const { modalProps, modalType } = action
		yield put({ type: MODAL_SUCCESS, modalProps, modalType })
	}
	catch (error) {
		yield put({ type: MODAL_FAIL, error })

	}
	
}

function* modalWatcher() {
	yield takeEvery(MODAL_REQUESTING, modalFlow)
}

export default modalWatcher
