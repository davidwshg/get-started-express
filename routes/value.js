module.exports = (app) => {

  const value = app.controllers.value;

  app.get('/value', value.get);

}