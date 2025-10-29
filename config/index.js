require('dotenv').config();
const dotenvDefault = require('./default.json');

module.exports = Object.assign(dotenvDefault, process.env);