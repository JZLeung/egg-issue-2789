'use strict';

const uuid = require('uuid');

module.exports = app => {
  if (app.config.debug) {
    app.config.coreMiddleware.unshift('less');
  }

  const localHandler = async (ctx, { username, password }) => {
    
    if (username === 'admin' && password === 'admin') {
        return { username, password, uid: 1, admin: true };
    }
    
    return null;
    // 验证通过
  };

  app.passport.verify(async (ctx, user) => {
    const auth_token = ctx.cookies.get(ctx.app.config.auth_cookie_name, {
        signed: true,
      });
      if (auth_token === 'admin') {
        return {
          username: 'admin',
          admin: false,
        };
      } else {
          return null
      }

    return existUser;
  });

  app.passport.deserializeUser(async (ctx, user) => {
    if (user) {
        const auth_token = ctx.cookies.get(ctx.app.config.auth_cookie_name, {
            signed: true,
          });
          if (auth_token === 'admin') {
            return {
              username: 'admin',
              admin: false,
            };
          } else {
              return null
          }
    }

    return null;
  });
};

