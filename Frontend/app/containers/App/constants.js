/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const INITIALIZE = 'app/App/INITIALIZE';
export const STORE_TOKEN = 'app/App/STORE_TOKEN';
export const DELETE_TOKEN = 'app/App/DELETE_TOKEN';
export const DEFAULT_LOCALE = 'en';
