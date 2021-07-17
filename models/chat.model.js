const mongoose = require('mongoose')

const { Schema } = mongoose;

const ChatSchema = new Schema({
    img:  String, // String is shorthand for {type: String}
    username: String,
    message: {type: String, default: 'Hello how are you?'},
    timeSend: String,
  });
  
const Chat = mongoose.model('Chat', ChatSchema)
  
module.exports = {
      Chat
  }