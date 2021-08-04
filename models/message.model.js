'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose;
const moment = require('moment')

const msgSchema = new Schema({
  sender: {
    required: true,
    type: String,
  },
  reciver: {
    required: true,
    type: String,
  },
  message: {
    required: true,
    type: String,
  },
  timeSend: {
    type: String,
    default: moment().format('hh:mm A'),
  },
})

  
const Message = mongoose.model('Message', msgSchema)
  
module.exports = {
      Message
  }