const Router = require('koa-router');
const messageController = require('../controllers/messageController')

const router = new Router();

router.get('/', messageController.getMessages);
router.get('/new', messageController.newMessages);
router.post('/new', messageController.createMessage);

module.exports = router;
