const Koa = require('koa');
const mongoose = require('mongoose');
const Router = require('koa-router');
const bodyParser = require('koa-body');

const router = new Router();

require('./models/Message');

const messagesRouter = require('./routes/messages')
const indexController = require('./routes/index')

const app = new Koa();

router.use('/messages', messagesRouter.routes());
router.use('/', indexController.routes())
app.use(router.routes());

require('dotenv').config();

const ENVIRONMENT = process.env.NODE_ENV.toUpperCase();

mongoose.connect(process.env[`DATABASE_${ENVIRONMENT}`]);
console.log(`Connected to ${ENVIRONMENT}`);

const Pug = require('koa-pug')
const pug = new Pug({
  viewPath: './views',
  basedir: './views',
  app: app
});

app.listen(3000)

app.use(bodyParser({
  multipart: true,
  urlencoded: true
}));

module.exports = app;
module.exports = mongoose;
