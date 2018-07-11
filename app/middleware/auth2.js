'use strict';

module.exports = () => {

  /*
   * 需要登录
   */
  return async function(ctx, next) {
    const auth_token = ctx.cookies.get(ctx.app.config.auth_cookie_name, {
      signed: true,
    });
    if (auth_token === 'admin') {
      ctx.user = {
        username: 'admin',
        admin: false,
      };
    }
    if (!ctx.user || !ctx.user._id) {
      ctx.status = 403;
      ctx.body = 'forbidden!';
      return;
    }
    await next();
  };
};
