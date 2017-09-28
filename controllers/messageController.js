const mongoose = require('mongoose');
const Message = mongoose.model('Message');

exports.newMessages = (ctx) => {
  ctx.render('newmessage')
}

exports.getMessages = (ctx) => {
  ctx.render('messages')
}

exports.createMessage = async (ctx, next) => {
  const message = Message({
    message: 'Need to get the message from view here'
  });
  await message.save();
  console.log(message)
  ctx.redirect('/messages')
}
