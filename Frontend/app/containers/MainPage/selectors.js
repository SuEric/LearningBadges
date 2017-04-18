import { createSelector } from 'reselect';

/**
 * Direct selector to the dashboardPage state domain
 */
const selectMainDomain = () => (state) => state.get('main');

/**
 * Other specific selectors
 */
const selectFirstChild = () => createSelector(
  selectMainDomain(),
  (mainState) => mainState.get('firstChild'),
);

const selectLastChild = () => createSelector(
  selectMainDomain(),
  (mainState) => mainState.get('lastChild'),
);

const selectMain = () => createSelector(
  selectMainDomain(),
  (mainState) => mainState.toJS(),
);

export default selectMain;

export {
  selectMainDomain,
  selectFirstChild,
  selectLastChild,
  selectMain,
};
