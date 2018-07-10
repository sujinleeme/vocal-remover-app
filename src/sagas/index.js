import { all } from "redux-saga/effects"
import ModalSaga from "../modal/sagas"

export default function* rootSagas() {
	
	yield all([
		ModalSaga()
	])
}
