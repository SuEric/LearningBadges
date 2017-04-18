import path from 'path';

const env = process.env.NODE_ENV || 'development';
const envConfig = require(`./${env}`); // eslint-disable-line import/no-dynamic-require

const config = {
  email: {
    client: '',
    connection: {
      apiKey: '',
    },
  },
  recaptcha: {
    client: 'google',
    connection: {
      siteKey: '',
    },
  },
  ...envConfig,
};

const defaults = {
  root: path.join(__dirname, '/..'),
};

export default Object.assign(defaults, config);
