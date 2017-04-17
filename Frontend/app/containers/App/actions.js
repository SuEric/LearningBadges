import {
  INITIALIZE,
  STORE_TOKEN,
  DELETE_TOKEN,
} from './constants';

export function initialize() {
  return {
    type: INITIALIZE,
  };
}

export function storeToken(token) {
  return {
    type: STORE_TOKEN,
    token,
  };
}

export function deleteToken(token) {
  return {
    type: DELETE_TOKEN,
    token,
  };
}
