const Koa = require('koa');
const mongoose = require('mongoose');
const Router = require('koa-router');
const render = require('koa-ejs');
const path = require('path');
const app = new Koa();
const router = new Router();

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'messages',
  viewExt: 'html',
})

app.use(async (ctx) => {
  await ctx.render('messages')
})

const getMessages = require('./routes/messages')

router.use('/messages', getMessages.routes());
app.use(router.routes())

require('dotenv').config();

const ENVIRONMENT = process.env.NODE_ENV.toUpperCase();

mongoose.connect(process.env[`DATABASE_${ENVIRONMENT}`]);

app.listen(3000)

module.exports = app;
module.exports = mongoose;
