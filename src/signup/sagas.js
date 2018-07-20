import { call, take, put, fork, cancel } from "redux-saga/effects"
import { modalRequest } from "../modal/actions"
import { forwardTo } from "../lib"

import {
	SIGNUP_REQUESTING,
	SIGNUP_SUCCESS,
	SIGNUP_ERROR
} from "./constants"

import {
	setClient,
	unsetClient
} from "../client/actions"

import {
	snackbarRequest
} from "../snackbar/actions"

import {
	LOG_OUT,
	LOG_IN
} from "../snackbar/constants"

import {
	CLIENT_UNSET
} from "../client/constants"

function* logout() {
	// dispatches the CLIENT_UNSET action
	yield put(unsetClient())
	
	// remove our token
	yield put(snackbarRequest({snackbarType: LOG_OUT, snackbarOpen: true}))
	
	yield call(forwardTo, '/')
}

function* signupFlow(response, channel) {
	try {
		yield put(setClient({response, channel}))
		
		yield put({type: SIGNUP_SUCCESS})
		
		// close modal window
		yield put(modalRequest({modalOpen: false}))
		
		// show snackbar notification
		yield put(snackbarRequest({snackbarType: LOG_IN, snackbarOpen: true}))
		
	} catch (error) {
		yield put({type: SIGNUP_ERROR, error})
	}
}

function* signupWatcher() {
	while (true) {
		const {response, channel} = yield take(SIGNUP_REQUESTING)
		const task = yield fork(signupFlow, response, channel)
		const action = yield take([CLIENT_UNSET, SIGNUP_ERROR])
		
		if (action.type === CLIENT_UNSET) {
			yield cancel(task)
			yield call(logout)
		}
	}
}

export default signupWatcher
