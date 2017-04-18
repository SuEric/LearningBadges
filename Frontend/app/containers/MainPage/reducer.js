/*
 *
 * MainPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  MAIN_INITIALIZE,
  MAIN_ERROR,
} from './constants';

const initialState = fromJS({
  error: '',
  firstChild: false,
  lastChild: false,
  user: {
    name: '',
  },
});

function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case MAIN_INITIALIZE:
      return state;
    case MAIN_ERROR:
      return state
        .set('error', action.error);
    default:
      return state;
  }
}

export default mainPageReducer;
