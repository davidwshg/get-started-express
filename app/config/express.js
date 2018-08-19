import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import morgan from 'morgan';

import logger from '../services/winston';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.static('./app/public'));
app.use(
    morgan('combined', {
        stream: { write: msg => logger.info(msg) }
    })
);

export default app