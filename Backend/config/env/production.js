export default {
  env: 'production',
  jwtSecret: '',
  port: 8081,
  database: {
    client: 'mongodb',
    connection: {
      host: '',
      user: '',
      password: '',
      database: 'LearningBadges',
      charset: 'utf8',
    },
  },
};
