/*
 *
 * SignUpPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGNIN_INITIALIZE,
  SINGIN_EMAIL_UPDATED,
  SIGNIN_PASSWORD_UPDATED,
  SIGNIN_VALIDATED,
  SIGNIN_SUBMIT,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
} from './constants';

const initialState = fromJS({
  email: '',
  password: '',
  errors: {
    email: '',
    password: '',
  },
  success: '',
  failure: '',
  pristine: false,
  submitting: false,
});

function signInReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_INITIALIZE:
      return state;
    case SINGIN_EMAIL_UPDATED:
      return state
        .set('email', action.email)
        .set('pristine', false);
    case SIGNIN_PASSWORD_UPDATED:
      return state
        .set('password', action.password)
        .set('pristine', false);
    case SIGNIN_VALIDATED:
      return state
        .set('errors', action.errors)
        .set('pristine', false)
        .set('submitting', false);
    case SIGNIN_SUBMIT:
      return state
        .set('email', action.email)
        .set('password', action.password)
        .set('submitting', true);
    case SIGNIN_SUCCESS:
      return state
        .set('success', action.success)
        .set('submitting', false);
    case SIGNIN_FAILURE:
      return state
        .set('failure', action.failure)
        .set('submitting', false);
    default:
      return state;
  }
}

export default signInReducer;
