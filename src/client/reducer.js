import { CLIENT_SET, CLIENT_UNSET } from './constants';

const initialSate = {
  user: null
};

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case CLIENT_SET:
      return {
        user: action.response
      };

    case CLIENT_UNSET:
      return {
        user: null
      };

    default:
      return state;
  }
};

export default reducer;
