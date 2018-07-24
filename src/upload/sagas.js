import { call, put, take, takeEvery } from "redux-saga/effects"
import { UPLOAD_REQUEST, UPLOAD_RESET, UPLOAD_PROGRESS, UPLOAD_SUCCESS, UPLOAD_ERROR} from "./constants"
import {snackbarRequest } from "../snackbar/actions"
import { PREVIEW_SUCCESS} from "../snackbar/constants"
import createFileUploadChannel from "./createFileUploadChannel"

// Upload the specified file
function* uploadFileFlow(file) {
  const channel = yield call(createFileUploadChannel, "/some/path", file)
  while (true) {
    const {progress = 0, error, success} = yield take(channel)
    if (error) {
      yield put({type: UPLOAD_ERROR, error})
      return
    }
    if (success) {
      yield put({type: UPLOAD_SUCCESS, file})
      return
    }
  
    // show snackbar notification
    yield put(snackbarRequest({snackbarType: PREVIEW_SUCCESS, snackbarOpen: true}))
    yield put({type: UPLOAD_PROGRESS, file, progress})
  }
}

// Watch for an upload request and then
// defer to another saga to perform the actual upload

function* uploadFileWatcher() {
  yield takeEvery(UPLOAD_REQUEST, function* (action) {
    const file = action.file
    yield call(uploadFileFlow, file)
  })
}

export default uploadFileWatcher
