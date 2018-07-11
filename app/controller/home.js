'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async authIndex() {
    this.ctx.body = `Hello, ${this.ctx.user.username}`;
  }

  async authLogin() {
    const { body } = this.ctx.request;
    console.log(body);
    const { name, pass } = body;
    if (name === 'admin' && pass === 'admin') {
      this.ctx.cookies.set(this.ctx.app.config.auth_cookie_name, 'admin', {
        path: '/',
        maxAge: 86400,
        signed: true,
        httpOnly: true,
      }); // cookie 有效期1天

      this.ctx.status = 200;
      this.ctx.body = {
        code: 200,
        status: 'success',
        errMsg: '',
      };
    } else {
      this.ctx.status = 403;
      this.ctx.body = {
        code: 403,
        status: 'failed',
        errMsg: 'username or password is not matched',
      };
    }
  }
}

module.exports = HomeController;
