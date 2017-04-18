import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { selectGlobal } from '../containers/App/selectors';

// Take the regular authentication & redirect to login from before
export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: selectGlobal(),
  predicate: (app) => app.get('token') !== '',
  redirectAction: routerActions.replace,
  failureRedirectPath: '/',
  wrapperDisplayName: 'UserIsAuthenticated',
});
