/**
*
* SignInForm
*
*/

import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SignInForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div className="row center-xs center-sm center-md center-lg" style={{ marginTop: '30px' }}>
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
            <Paper zDepth={3}>
              <div style={{ padding: '16px' }}>
                <div className="row center-xs">
                  <div className="col-xs-12">
                    <TextField
                      id="textViewEmail"
                      hintText={<FormattedMessage {...messages.signIn.email} />}
                      floatingLabelText={<FormattedMessage {...messages.signIn.email} />}
                      type="email"
                      errorText={props.errors.email}
                      errorStyle={{ textAlign: 'left' }}
                      onChange={props.onChangeEmail}
                      disabled={props.submitting}
                      style={{ width: '100%' }}
                      maxLength="45"
                      autoFocus="autofocus"
                      required="required"
                    />
                  </div>
                  <div className="col-xs-12">
                    <TextField
                      id="textViewPassword"
                      hintText={<FormattedMessage {...messages.signIn.password} />}
                      floatingLabelText={<FormattedMessage {...messages.signIn.password} />}
                      type="password"
                      errorText={props.errors.password}
                      errorStyle={{ textAlign: 'left' }}
                      onChange={props.onChangePassword}
                      disabled={props.submitting}
                      style={{ width: '100%' }}
                      minLength="6"
                      maxLength="50"
                      required="required"
                    />
                  </div>
                  <div className="col-xs-12">
                    { !props.submitting
                      ?
                        <div className="col-xs-12">
                          <RaisedButton
                            type="submit"
                            label={<FormattedMessage {...messages.signIn.signIn} />}
                            style={{ margin: 16 }}
                            primary={true} // eslint-disable-line react/jsx-boolean-value
                            disabled={props.pristine}
                          />
                        </div>
                      :
                        <div className="col-xs-12">
                          <CircularProgress />
                          <br />
                          <small>
                            <FormattedMessage {...messages.signIn.loading} />
                          </small>
                        </div>
                    }
                  </div>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </form>
    </div>
  );
}

SignInForm.propTypes = {
  onChangeEmail: React.PropTypes.func,
  onChangePassword: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
  errors: React.PropTypes.object,
  pristine: React.PropTypes.bool,
  submitting: React.PropTypes.bool,
};

export default SignInForm;
