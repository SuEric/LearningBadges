import { fromJS } from 'immutable';
import {
  INITIALIZE,
  STORE_TOKEN,
  DELETE_TOKEN,
} from './constants';

const initialState = fromJS({
  token: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return state
        .set('token', (localStorage.getItem('token') !== null) ? localStorage.token : '');
    case STORE_TOKEN:
      return state
        .set('token', action.token);
    case DELETE_TOKEN:
      return state
        .set('token', '');
    default:
      return state;
  }
}

export default appReducer;
