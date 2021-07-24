'use strict'

const mongoose = require('mongoose')
const moment = require('moment')
const timeNow = moment().format('hh:mm A')

const { Schema } = mongoose

const ProfileSchema = new Schema({
  img: {
    type: String,
    default: 'images/Dani.jpg',
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    default: "Hello i'm using DanApp",
  },
  message: {
    type: String,
    default: 'Hai guys...',
  },
  timeSend: {
    type: String,
    default: timeNow,
  },
})

const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = {
  Profile,
}
