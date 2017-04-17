import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectToken = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('token')
);

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  selectToken,
  makeSelectLocationState,
};
