const winston = require('winston');
const fs = require('fs');

if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: 'silly',
      colorize: true
    }),
    new winston.transports.File({
      level: 'silly',
      filename: 'logs/logs.log',
      maxsize: 100000,
      maxFiles: 10
    })
  ]
});

module.exports = logger;