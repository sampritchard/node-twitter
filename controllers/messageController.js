const render = require('koa-views-render');

exports.getMessages = (ctx) => {
  app.use(render('messages'));
}
