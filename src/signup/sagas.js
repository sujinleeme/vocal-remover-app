import { call, put, takeLatest } from "redux-saga/effects"
import { modalRequest } from "../modal/actions"
// import { handleApiErrors } from "../lib/api-errors"
import {
	SIGNUP_REQUESTING,
	SIGNUP_SUCCESS,
	SIGNUP_ERROR
} from "./constants"

import {
	setClient,
	unsetClient,
} from '../client/actions'

function* signupFlow(action) {
	try {
		const {response, channel} = action
		
		yield put(setClient({response}))
		
		yield put({type: SIGNUP_SUCCESS, response, channel})
		
		// close modal
		yield put(modalRequest({modalProps: false}))
		
	} catch (error) {
		
		yield put({type: SIGNUP_ERROR, error})
	}
}


function* signupWatcher() {
	
	yield takeLatest(SIGNUP_REQUESTING, signupFlow)
}

export default signupWatcher
