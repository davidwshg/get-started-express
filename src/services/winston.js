import { Logger, transports as _transports } from 'winston';
import { existsSync, mkdirSync } from 'fs';

if (!existsSync('logs')) {
  mkdirSync('logs');
}

const logger = new Logger({
  transports: [
    new _transports.Console({
      level: process.env.logger,
      colorize: true
    }),
    new _transports.File({
      level: process.env.logger,
      filename: 'logs/logs.log',
      maxsize: 100000,
      maxFiles: 10
    })
  ]
});

export default logger;