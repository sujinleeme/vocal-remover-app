import { UPLOAD_REQUEST, UPLOAD_RESET } from "./constants"

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
