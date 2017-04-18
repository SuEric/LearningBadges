/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import {
  selectToken,
} from './selectors';

import * as appActions from './actions';

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 0px;
  margin: 0px 0px 0px 0px;
`;

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.actions.initialize();
  }

  render() {
    return (
      <Container>
        {React.Children.toArray(this.props.children)}
      </Container>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  actions: React.PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  token: selectToken(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
