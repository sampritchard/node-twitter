const Koa = require('koa');
const mongoose = require('mongoose');
const app = new Koa();

require('dotenv').config();

const ENVIRONMENT = process.env.NODE_ENV.toUpperCase();

mongoose.connect(process.env[`DATABASE_${ENVIRONMENT}`]);

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000)

module.exports = app;
module.exports = mongoose;
