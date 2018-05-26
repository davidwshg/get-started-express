const express = require('express');
const consign = require('consign');

const app = express();

consign()
  .include('services')
  .then('controllers')
  .then('routes')
  .into(app);

module.exports = app;