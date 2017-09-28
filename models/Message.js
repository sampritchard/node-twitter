const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  message: {
    type: String,
    trim: true,
    required: 'Please enter a message'
  }
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
