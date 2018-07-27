import { UPLOAD_REQUEST, UPLOAD_RESET, UPLOAD_REJECT } from "./constants"

export const uploadRequest = ({file}) => {
  return {
    type: UPLOAD_REQUEST,
    file
  }
}

export const uploadReset = () => {
  return {
    type: UPLOAD_RESET,
  }
}
export const uploadReject = () => {
  return {
    type: UPLOAD_REJECT,
  }
}
