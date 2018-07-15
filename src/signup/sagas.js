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
	LOG_OUT
} from "../snackbar/constants"

import {
	CLIENT_UNSET
} from "../client/constants"

function* logout() {
	// dispatches the CLIENT_UNSET action
	yield put(unsetClient())
	
	yield put(snackbarRequest({snackbarType: LOG_OUT, snackbarOpen: true}))
	
	// remove our token
	// localStorage.removeItem('token')
	
	// redirect to the root
	yield call(forwardTo, '/')
}

function* signupFlow(response, channel) {
	try {
		
		yield put(setClient({response, channel}))
		
		yield put({type: SIGNUP_SUCCESS})
		
		// close modal window
		yield put(modalRequest({modalOpen: false}))
		
	} catch (error) {
		yield put({type: SIGNUP_ERROR, error})
	}
}

function* signupWatcher() {
	while (true) {
		const {response, channel} = yield take(SIGNUP_REQUESTING)
		const task = yield fork(signupFlow, response, channel)
		const action = yield take([CLIENT_UNSET, SIGNUP_ERROR])
		
		if (action.type === CLIENT_UNSET) yield cancel(task)
		yield call(logout)
	}
}

export default signupWatcher
