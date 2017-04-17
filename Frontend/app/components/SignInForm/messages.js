/*
 * SignInForm Messages
 *
 * This contains all the text for the SignInForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  signIn: {
    email: {
      id: 'app.components.SignInForm.email',
      defaultMessage: 'Email',
    },
    password: {
      id: 'app.components.SignInForm.password',
      defaultMessage: 'Password',
    },
    signIn: {
      id: 'app.components.SignInForm.signIn',
      defaultMessage: 'Sign In',
    },
    loading: {
      id: 'app.components.SignInForm.loading',
      defaultMessage: 'Loading...',
    },
  },
});
