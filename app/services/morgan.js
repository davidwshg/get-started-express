const morgan = require('morgan');
const logger = require('./winston');

module.exports = () => morgan('combined', {
    stream: { write: msg => logger.info(msg) }
});