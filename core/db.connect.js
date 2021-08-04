'use strict'

const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB_ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
mongoose.set('returnOriginal', false)

module.exports = () => {
    mongoose.connection
    .on('error', console.error.bind(console, 'Connection Error!'))
    .once('open', () => console.log('Database Connected!'))
} 