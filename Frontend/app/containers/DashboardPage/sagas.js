/*
 *
 * DashboardPage sagas
 *
 */

import { LOCATION_CHANGE } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { take, fork, cancel } from 'redux-saga/effects';

import {
  onFailure,
} from './actions';

import {
  DASHBOARD_FAILURE,
} from './constants';

export function* dashboardWatcher() {
  yield fork(takeLatest, DASHBOARD_FAILURE, onFailure);
}

export function* dashboardFlow() {
  const watcher = yield fork(dashboardWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  dashboardFlow,
];

