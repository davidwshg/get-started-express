import { default as controller } from '../controllers/user';

export default (app) => {
  app.get('/user/:id', controller.getForId);
  app.get('/user', controller.get);
  app.post('/user', controller.create);
  app.put('/user/:id', controller.update);
  app.delete('/user/:id', controller.delete);
}