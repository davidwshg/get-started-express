import log from './app/services/winston';
import app from './app/routes/handle';

const port = process.env.port || 1337;

app.listen(port, () => log.info(`Server run in port ${port}.`));