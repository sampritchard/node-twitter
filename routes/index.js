const Router = require('koa-router');
const indexController = require('../controllers/indexController')

const router = new Router();

router.get('/', indexController.indexWelcome);

module.exports = router;
