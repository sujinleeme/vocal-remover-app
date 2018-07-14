import { all } from "redux-saga/effects"
import ModalSaga from "../modal/sagas"
import SignupSaga from "../signup/sagas"
export default function* rootSagas() {
	
	yield all([
		ModalSaga(),
		SignupSaga(),
	])
}
