const express = require('express');
const consign = require('consign');
const morgan = require('morgan');
const bodyParser = require('body-parser');  
const expressValidator = require('express-validator');

const logger = require('../services/winston');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressValidator())

const loggerResource = (req, res) => logger.info(req.method, req.url, req.body)

app.use(
  morgan(process.env.logger == 'dev' ? 'dev' : 'combined', {
    skip: loggerResource,
    stream: { write: msg => logger.info(msg) }
  })
);

consign()
  .include('services')
  .then('controllers')
  .then('routes')
  .into(app);

module.exports = app;