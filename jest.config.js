// Jest currently has a bug in finding match files if the jest config file isn't in the root dir.
const eslint = require('./config/jest.config.js');
module.exports = eslint;

