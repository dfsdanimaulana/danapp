'use strict'

require('dotenv').config()
const session = require('express-session')
const mongodbSession = require('connect-mongodb-session')(session)

const store = new mongodbSession({
  uri: process.env.DB_ATLAS,
  collection: 'wa_session',
})

// use session
module.exports = (app) => {
  app.use(
    session({
      secret: 'key that will sign cookie in the browser',
      resave: false,
      saveUninitialized: false,
      store,
    })
  )
}
