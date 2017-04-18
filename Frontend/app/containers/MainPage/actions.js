/*
 *
 * MainPage actions
 *
 */

import {
  MAIN_INITIALIZE,
  MAIN_ERROR,
} from './constants';

export function initialize() {
  return {
    type: MAIN_INITIALIZE,
  };
}

export function mainError(error) {
  return {
    type: MAIN_ERROR,
    error,
  };
}
