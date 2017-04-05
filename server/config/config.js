require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DB_URL,
    dialect: 'postgres',
    logging: false
  },
  test: {
    url: process.env.DB_TEST_URL,
    dialect: 'postgres',
    logging: false
  },
  production: {
    use_env_variable: process.env.DB_URL
  }
};
