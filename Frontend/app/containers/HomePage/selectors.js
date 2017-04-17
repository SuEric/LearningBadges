import { createSelector } from 'reselect';

/**
 * Direct selector to the SignInPage state domain
 */
const selectSignInPageDomain = () => (state) => state.get('signIn');

/**
 * Other specifc selectors
 */
const selectEmail = () => createSelector(
  selectSignInPageDomain(),
  (signInState) => signInState.get('email'),
);

const selectPassword = () => createSelector(
  selectSignInPageDomain(),
  (signInState) => signInState.get('password'),
);

const selectErrors = () => createSelector(
  selectSignInPageDomain(),
  (signInState) => signInState.get('errors'),
);

const selectSuccess = () => createSelector(
  selectSignInPageDomain(),
  (signInState) => signInState.get('success'),
);

const selectFailure = () => createSelector(
  selectSignInPageDomain(),
  (signInState) => signInState.get('failure'),
);

const selectPristine = () => createSelector(
  selectSignInPageDomain(),
  (signInState) => signInState.get('pristine'),
);

const selectSubmitting = () => createSelector(
  selectSignInPageDomain(),
  (signInState) => signInState.get('submitting'),
);

/**
 * Default selector user by SignInPage
 */
const selectSignIn = () => createSelector(
  selectSignInPageDomain(),
  (signInState) => signInState.toJS(),
);

export default selectSignIn;
export {
  selectEmail,
  selectPassword,
  selectErrors,
  selectSuccess,
  selectFailure,
  selectPristine,
  selectSubmitting,
};
