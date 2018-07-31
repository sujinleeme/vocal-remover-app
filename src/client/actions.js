import * as actionTypes from './constants';

export function setClient({ response }) {
  return {
    type: actionTypes.CLIENT_SET,
    response
  };
}

export function unsetClient() {
  return {
    type: actionTypes.CLIENT_UNSET
  };
}
