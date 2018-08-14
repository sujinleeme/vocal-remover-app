import { SIGNUP_REQUESTING } from './constants';

export const signupRequest = ({ response, channel }) => ({
  type: SIGNUP_REQUESTING,
  response,
  channel
});
