import { takeLatest } from 'redux-saga';
import { browserHistory } from 'react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import { take, call, put, fork, cancel, select } from 'redux-saga/effects';

export function* redirectToHome() {
  localStorage.removeItem('token');
  browserHistory.push('/');
}

/**
 * Observer for actions performed in Register scope waiting to trigger them
 *
 * @export MainPage/sagas/getMainWatcher
 */
export function* getMainWatcher() {
}

/**
 * Root saga manages watcher lifecycle
 */
export function* MainFlow() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getMainWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  MainFlow,
];
