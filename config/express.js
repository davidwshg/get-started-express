const express = require('express');
const consign = require('consign');
const morgan = require('morgan');
const bodyParser = require('body-parser');  
const expressValidator = require('express-validator');

const logger = require('../services/winston');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());

app.use(express.static('./public'));

app.use(
  morgan('combined', {
    stream: { write: msg => logger.info(msg) }
  })
);

consign()
  .include('services')
  .then('controllers')
  .then('routes')
  .into(app);

module.exports = app;