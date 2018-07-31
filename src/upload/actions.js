import { UPLOAD_REQUEST, UPLOAD_RESET, UPLOAD_REJECT } from './constants';

export const uploadRequest = ({ file }) => ({
  type: UPLOAD_REQUEST,
  file
});

export const uploadReset = () => ({
  type: UPLOAD_RESET,
});
export const uploadReject = () => ({
  type: UPLOAD_REJECT,
});
