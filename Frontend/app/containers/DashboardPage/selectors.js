/*
 *
 * QuestionPage selectors
 *
 */

import { createSelector } from 'reselect';

/**
 * Direct selector to the dashboardPage state domain
 */
const selectDashboardDomain = () => (state) => state.get('dashboard');

/**
 * Other specific selectors
 */

/**
 * Default selector used by dashboardPage
 */
const selectDashboard = () => createSelector(
  selectDashboardDomain(),
  (dashboardState) => dashboardState.toJS(),
);

export default selectDashboard;

export {
  selectDashboardDomain,
  selectDashboard,
};
