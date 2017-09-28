const Koa = require('koa');
const mongoose = require('mongoose');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

const Pug = require('koa-pug')
const pug = new Pug({
  viewPath: './views',
  basedir: './views',
  app: app
});

const messagesRouter = require('./routes/messages')
const indexController = require('./routes/index')

router.use('/messages', messagesRouter.routes());
router.use('/', indexController.routes())
app.use(router.routes());

require('dotenv').config();

const ENVIRONMENT = process.env.NODE_ENV.toUpperCase();

mongoose.connect(process.env[`DATABASE_${ENVIRONMENT}`]);

app.listen(3000)

module.exports = app;
module.exports = mongoose;
