/*
 *
 * DashboardPage actions
 *
 */

import {
  DASHBOARD_INITIALIZE,
  DASHBOARD_FAILURE,
} from './constants';

export function initialize() {
  return {
    type: DASHBOARD_INITIALIZE,
  };
}

export function onFailure(failure) {
  return {
    type: DASHBOARD_FAILURE,
    failure,
  };
}
