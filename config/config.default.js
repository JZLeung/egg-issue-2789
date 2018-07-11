'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531322285306_3583';
  config.auth_cookie_name = 'egg-issue-demo';

  // add your config here
  config.middleware = [];

  config.passportLocal = {
    usernameField: 'name',
    passwordField: 'pass',
  };

  config.security = {
    csrf: false,
  };

  return config;
};
