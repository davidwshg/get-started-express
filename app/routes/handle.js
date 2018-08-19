import { default as app } from '../config/express';
import { default as user } from './user';

user(app);

export default app;