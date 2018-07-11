'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async authIndex() {
    this.ctx.body = `Hello, ${this.ctx.user.username}`;
  }
}

module.exports = HomeController;
