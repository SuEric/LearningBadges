import { browserHistory } from 'react-router';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import request from '../../utils/request';
import {
  storeToken,
} from '../App/actions';
import {
  selectToken,
} from '../App/selectors';
import {
  SIGNIN_INITIALIZE,
  SIGNIN_SUBMIT,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
} from './constants';
import {
  selectEmail,
  selectPassword,
} from './selectors';
import {
  onSuccess,
  onFailure,
} from './actions';

export function* initialize() {
  const token = yield select(selectToken());

  if (token) {
    browserHistory.push('main/dashboard');
  }
}

export function* doSignIn() {
  const email = yield select(selectEmail());
  const password = yield select(selectPassword());

  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `email=${email}&` +
      `password=${password}`,
  };

  let response;
  try {
    response = yield call(request, 'auth', config);
    if (!response.error) {
      yield put(onSuccess(response.message));
      localStorage.setItem('token', response.token);
      yield put(storeToken(response.token));
    } else {
      yield put(onFailure(response.message));
    }
  } catch (error) {
    yield put(onFailure('Something went wrong'));
  }
}

export function* goToDashboard() {
  let redirectUrl = 'main/dashboard';

  if (browserHistory.getCurrentLocation().query.redirect) {
    redirectUrl = browserHistory.getCurrentLocation().query.redirect;
  }

  browserHistory.push(redirectUrl);
}

export function* getSignInWatcher() {
  yield fork(takeLatest, SIGNIN_INITIALIZE, initialize);
  yield fork(takeLatest, SIGNIN_SUBMIT, doSignIn);
  yield fork(takeLatest, SIGNIN_SUCCESS, goToDashboard);
  yield fork(takeLatest, SIGNIN_FAILURE, onFailure);
}

export function* signInFlow() {
  // Fork watcher so we can continue exeuction
  const watcher = yield fork(getSignInWatcher);

  // Load data on initial route load
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  signInFlow,
];
