import { Logger, transports } from 'winston';
import { existsSync, mkdirSync } from 'fs';

if (!existsSync('logs')) {
  mkdirSync('logs');
}

const logger = new Logger({
  transports: [
    new transports.Console({
      level: process.env.logger,
      colorize: true
    }),
    new transports.File({
      level: process.env.logger,
      filename: 'logs/logs.log',
      maxsize: 100000,
      maxFiles: 10
    })
  ]
});

export default logger;
