const winston = require('winston');
const fs = require('fs');

if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: process.env.logger,
      colorize: true
    }),
    new winston.transports.File({
      level: process.env.logger,
      filename: 'logs/logs.log',
      maxsize: 100000,
      maxFiles: 10
    })
  ]
});

logger.info('winston ready.');

module.exports = logger;