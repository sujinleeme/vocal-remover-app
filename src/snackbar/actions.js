import { SNACKBAR_REQUESTING } from './constants';

export const snackbarRequest = ({ snackbarType, snackbarOpen }) => ({
  type: SNACKBAR_REQUESTING,
  snackbarType,
  snackbarOpen
});
