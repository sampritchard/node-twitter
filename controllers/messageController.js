const mongoose = require('mongoose');
const Message = mongoose.model('Message');

exports.newMessages = (ctx) => {
  ctx.render('newmessage')
}

exports.createMessage = async (ctx, next) => {
  const message = Message({
    message: 'Need to get the message from view here'
  });
  await message.save();
  ctx.redirect('/messages')
}

exports.getMessages = async (ctx, next) => {
  const messages = await Message.find()
  ctx.render('messages', { messages })
}
