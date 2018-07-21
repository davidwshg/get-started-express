const app = require('./app/config/express');
const logger = require('./app/services/winston');

const port = process.env.port || 1337;

app.listen(port, () => logger.info(`Server run in port ${port}.`));