'use strict'

const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB_ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify:true,
})
mongoose.set('returnOriginal', false)

module.exports = () => {
    mongoose.connection
    .on('error', console.error.bind(console, 'connection error:'))
    .once('open', () => console.log('Database Connected!'))
}