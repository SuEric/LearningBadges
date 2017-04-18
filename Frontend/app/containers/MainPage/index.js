/*
 *
 * MainPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import {
  selectFirstChild,
  selectLastChild,
} from './selectors';
import * as mainActions from './actions';

const Main = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 0px;
  margin: 2em 0;
`;

class MainPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props, context) {
    super(props, context);

    this.onLogout = this.onLogout.bind(this);
    this.onShowSettings = this.onShowSettings.bind(this);
  }

  componentDidMount() {
    this.props.actions.initialize();
  }

  onLogout() {
    this.props.actions.logout();
  }

  onShowSettings() {
    this.props.actions.showSettings();
  }

  childrenWithProps(props) {
    return React.Children.map(this.props.children,
     (child) => React.cloneElement(child, props)
    );
  }

  render() {
    return (
      <div>
        <Toolbar>
          {/* ToolbarGroup firstChild true required for the component evaluate the last child */}
          <ToolbarGroup firstChild={this.props.firstChild}>
            <Link to={'/main/dashboard/'}>
              LearningBadges
            </Link>
          </ToolbarGroup>
          <ToolbarGroup lastChild={this.props.lastChild}>
          </ToolbarGroup>
        </Toolbar>
        <Main>
          {this.childrenWithProps({ user: this.props.user })}
        </Main>
      </div>
    );
  }
}

MainPage.propTypes = {
  children: React.PropTypes.node,
  actions: React.PropTypes.any,
  firstChild: React.PropTypes.bool.isRequired,
  lastChild: React.PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  firstChild: selectFirstChild(),
  lastChild: selectLastChild(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(mainActions, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
