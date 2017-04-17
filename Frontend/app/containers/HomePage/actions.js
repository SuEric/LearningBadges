import {
  SIGNIN_INITIALIZE,
  SINGIN_EMAIL_UPDATED,
  SIGNIN_PASSWORD_UPDATED,
  SIGNIN_VALIDATED,
  SIGNIN_SUBMIT,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
} from './constants';

export function initialize() {
  return {
    type: SIGNIN_INITIALIZE,
  };
}

export function updateEmail(email) {
  return {
    type: SINGIN_EMAIL_UPDATED,
    email,
  };
}

export function updatePassword(password) {
  return {
    type: SIGNIN_PASSWORD_UPDATED,
    password,
  };
}

export function validate(errors) {
  return {
    type: SIGNIN_VALIDATED,
    errors,
  };
}

export function onSubmit(email, password) {
  return {
    type: SIGNIN_SUBMIT,
    email,
    password,
  };
}

export function onSuccess(success) {
  return {
    type: SIGNIN_SUCCESS,
    success,
  };
}

export function onFailure(failure) {
  return {
    type: SIGNIN_FAILURE,
    failure,
  };
}
