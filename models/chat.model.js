const mongoose = require('mongoose')
const { Schema } = mongoose;

const msgSchema = new Schema({
    usernama:String,
    message:String,
    timeSend: String
})
const ChatSchema = new Schema({
    img:  String,
    username: String,
    message: String
  });
  
const Chat = mongoose.model('Chat', ChatSchema)
  
module.exports = {
      Chat
  }