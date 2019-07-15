import { SEND_EMAIL } from './constants';

export const sendEmail = (email) => dispatch => {
  return dispatch({type: SEND_EMAIL, payload: email})
}
