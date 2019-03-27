import value from '../controllers/value';

export default app => {
  app.get('/value', value.get);
}
