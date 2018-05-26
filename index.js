const app = require('./config/express');
const logger = require('./services/winston');

const port = process.env.port;

app.listen(port || 1337, () => logger.info(`Server run in port ${port}.`));