import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import morgan from 'morgan';
import cors from 'cors';

import log from '../services/winston';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.static('./app/public'));
app.use(cors(corsOptions));
app.use(
	morgan('combined', {
		stream: { write: msg => log.info(msg) }
	})
);

export default app