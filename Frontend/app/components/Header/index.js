/**
*
* Header
*
*/

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const ToolbarStyle = {
  backgroundColor: '#00BCD4',
  height: '64px',
  margin: '0px 0px 16px 0px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
};

function Header(props) {
  return (
    <Toolbar style={ToolbarStyle}>
      <ToolbarGroup firstChild={props.firstChild}>
      </ToolbarGroup>
      <ToolbarGroup lastChild={props.lastChild}>
        <div>
          <FlatButton
            id="helpButton"
            label={<FormattedMessage {...messages.header.help} />}
            href="#help"
          />
          <FlatButton
            id="registerButton"
            label={<FormattedMessage {...messages.header.signUp} />}
            href="sign-up"
          />
          <FlatButton
            id="loginButton"
            label={<FormattedMessage {...messages.header.signIn} />}
            href="/"
          />
        </div>
      </ToolbarGroup>
    </Toolbar>
  );
}

Header.propTypes = {
  firstChild: React.PropTypes.bool,
  lastChild: React.PropTypes.bool,
};

export default Header;
