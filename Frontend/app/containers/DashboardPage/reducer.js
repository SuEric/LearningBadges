/*
 *
 * DashboardPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DASHBOARD_INITIALIZE,
} from './constants';

const initialState = fromJS({
});

function dashboardPageReducer(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_INITIALIZE:
      return state
        .set('addingQuestion', false);
    default:
      return state;
  }
}

export default dashboardPageReducer;
