const axios = require('axios');

module.exports = (app) => {
  
  const value = {};

  value.get = (req, res) => {
    const values = ['v1', 'v2', 'v3'];

    res.status(200).send(values);
  }

  return value;

}