/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Header from '../../components/Header';
import SignInForm from '../../components/SignInForm';
import {
  selectEmail,
  selectPassword,
  selectErrors,
  selectSuccess,
  selectFailure,
  selectPristine,
  selectSubmitting,
} from './selectors';
import * as signInActions from './actions';
import messages from './messages';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  componentDidMount() {
    this.props.actions.initialize();
  }

  onSubmit(event) {
    event.preventDefault();

    if (!this.validate()) {
      return;
    }

    this.props.actions.onSubmit(
      this.props.email,
      this.props.password
    );
  }

  validate() {
    let formIsValid = true;
    const errors = {
      email: '',
    };

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.props.email || this.props.email === undefined)) {
      formIsValid = false;
      errors.email = <FormattedMessage {...messages.home.errors.email} />;
    }

    this.props.actions.validate(errors);

    return formIsValid;
  }

  updateEmail(event) {
    this.props.actions.updateEmail(event.target.value);
  }

  updatePassword(event) {
    this.props.actions.updatePassword(event.target.value);
  }

  render() {
    return (
      <div>
        <Helmet
          title=""
          meta={[
          ]}
        />
        <Header />
        <SignInForm
          onChangeEmail={this.updateEmail}
          onChangePassword={this.updatePassword}
          onSubmit={this.onSubmit}
          errors={this.props.errors}
          success={this.props.success}
          failure={this.props.failure}
          pristine={this.props.pristine}
          submitting={this.props.submitting}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  email: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  errors: React.PropTypes.objectOf(React.PropTypes.any),
  success: React.PropTypes.string.isRequired,
  failure: React.PropTypes.string.isRequired,
  pristine: React.PropTypes.bool.isRequired,
  submitting: React.PropTypes.bool.isRequired,
  actions: React.PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  email: selectEmail(),
  password: selectPassword(),
  errors: selectErrors(),
  success: selectSuccess(),
  failure: selectFailure(),
  pristine: selectPristine(),
  submitting: selectSubmitting(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(signInActions, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
