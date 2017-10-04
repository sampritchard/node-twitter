const mongoose = require('mongoose');
const Message = mongoose.model('Message');

exports.newMessages = (ctx) => {
  ctx.render('newmessage')
}

exports.createMessage = async (ctx, next) => {
  console.log(ctx.body)
  const message = Message({
    message: 'Bug2'
  });
  await message.save();
  ctx.redirect('/messages')
}

exports.getMessages = async (ctx, next) => {
  const messages = await Message.find()
  ctx.render('messages', { messages })
}
