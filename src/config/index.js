// src/config/index.js
require('dotenv').config();

const environment = process.env.NODE_ENV || 'development';
const baseConfig = {
  env: environment,
  isDev: environment === 'development',
  isTest: environment === 'testing',
  isProd: environment === 'production'
};

const envConfig = require(`./${environment}`); // Load environment-specific config

module.exports = Object.assign(baseConfig, envConfig);