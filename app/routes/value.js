import { default as controller } from '../controllers/value';

export default (app) => {
  app.get('/value', controller.get);
}