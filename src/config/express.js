import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import log from '../services/winston';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(
  morgan('combined', {
    stream: { write: msg => log.info(msg) }
  })
);

export default app;
