const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');  
const expressValidator = require('express-validator');

const morgan = require('../services/morgan');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.static('./public'));
app.use(morgan);

consign({ cwd: 'app' })
  .include('services')
  .then('controllers')
  .then('routes')
  .into(app);

module.exports = app;