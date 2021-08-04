'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose;
const moment = require('moment')

const msgSchema = new Schema({
    usernama:String,
    message:String,
    sender:String,
    timeSend: {
    type: String,
    default: moment().format('hh:mm A'),
  },
})

  
const Message = mongoose.model('Message', msgSchema)
  
module.exports = {
      Message
  }