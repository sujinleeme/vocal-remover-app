import { takeLatest } from 'redux-saga/effects'
import { HIDE_MODAL, SHOW_MODAL } from './constants'

// This will be run when the SIGNUP_REQUESTING
// Action is found by the watcher
function* openUserModal (action) {}

// Watches for the SIGNUP_REQUESTING action type
// When it gets it, it will call signupFlow()
// WITH the action we dispatched
function* modalWatcher () {
	// takeLatest() takes the LATEST call of that action and runs it
	// if we we're to use takeEvery, it would take every single
	// one of the actions and kick off a new task to handle it
	// CONCURRENTLY!!!
	yield takeLatest(HIDE_MODAL, modalFlow)
}

export default signupWatcher
