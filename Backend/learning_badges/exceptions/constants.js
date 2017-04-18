/*
 * ========================================
 * GENERIC ERRORS
 * Code 11XX
 * ========================================
 */
export const UNAUTHORIZED_EXCEPTION = {
  code: 1100,
  message: 'Sign in, please',
};

export const USER_DOES_NOT_EXIST = {
  code: 1102,
  message: 'The user doesn\'t exist',
};

export const USER_NOT_ADMIN = {
  code: 1103,
  message: 'Move along, there is nothing to see here',
};

export const USER_NOT_ENOUGH_PERMISSIONS = {
  code: 1104,
  message: 'You don\'t enough permissions to request this action',
};

/*
 * ========================================
 * SIGN UP ERRORS
 * Code 12XX
 * ========================================
 */

/*
 * ========================================
 * SIGN IN ERRORS
 * Code 13XX
 * ========================================
 */

export const SIGN_IN_INVALID_CREDENTIALS = {
  code: 1302,
  message: 'Invalid email or password',
};

/*
 * ========================================
 * ANSWER ERRORS
 * Code 14XX
 * ========================================
 */
export const ANSWER_INVALID_USER_TYPE = {
  code: 1401,
  message: 'You can\'t answer this question',
};

export const ANSWER_INVALID_QUESTION = {
  code: 1402,
  message: 'The question doesn\'t exist, so you can\'t answer it',
};

export const ANSWER_DUPLICATED = {
  code: 1403,
  message: 'You have answered this question',
};

export const ANSWER_INVALID_FRAUD_STATUS = {
  code: 1404,
  message: 'The answer has not been approved to answer it',
};

export const ANSWER_INVALID_QUESTION_STATUS = {
  code: 1405,
  message: 'The question has been closed',
};

/*
 * ========================================
 * QUESTION ERRORS
 * Code 15XX
 * ========================================
 */
export const QUESTION_INVALID_USER_TYPE = {
  code: 1501,
  message: 'You can\'t ask a question',
};
