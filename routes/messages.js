const Router = require('koa-router');
const messageController = require('../controllers/messageController')

const router = new Router();

router.get('/', messageController.getMessages);

module.exports = router;
