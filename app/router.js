'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  router.get('/', controller.home.index);

  const localStrategy = app.passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin',
  });
  // use egg-passport-local
  router.post('/login', localStrategy);
  router.get('/auth', middleware.auth(), controller.home.authIndex);

  // without egg-passport-local
  router.post('/login2', controller.home.authLogin);
  router.get('/auth2', middleware.auth2(), controller.home.authIndex);

};
