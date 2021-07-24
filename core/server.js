'use strict'

const app = require('express')()
const server = require('http').createServer(app)
require('dotenv').config()

const port = process.env.PORT || 8000

// database connection
require('./db.connect')()

// socket io
require('./io.server')(server)

server.listen(port, (err) => {
  if (err) {
    console.log('there is a problem ', err)
  }
  console.log(`Server listening on http://localhost:${port}`)
})

module.exports = app