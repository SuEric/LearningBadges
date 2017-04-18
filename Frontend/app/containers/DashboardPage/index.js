/*
 *
 * DashboardPage
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import AppBar from 'material-ui/AppBar';

import * as dashboardActions from './actions';

import { UserIsAuthenticated } from '../../utils/auth';

class DashboardPage extends React.Component { // eslint-disable-line

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Helmet
          title="Dashboard"
          meta={[
            { name: 'description', content: 'Sign Up at Tech for Reporters to get the best custom info about technology' },
          ]}
        />
        <div
          style={{
            margin: '0 auto',
            width: '80%',
          }}
        >
          <AppBar
            style={{ margin: '2em 0' }}
            title="Dashboard"
            showMenuIconButton={false}
          />
        </div>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  actions: React.PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dashboardActions, dispatch),
    dispatch,
  };
}

export default UserIsAuthenticated(connect(mapStateToProps, mapDispatchToProps)(DashboardPage));
