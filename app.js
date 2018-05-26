const app = require('./config/express');
const logger = require('./services/winston');

const port = process.env.port;

app.listen(port, () => logger.info(`Server run in port ${port}.`));