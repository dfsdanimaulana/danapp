'use strict'

const app = require('express')()
const server = require('http').createServer(app)
require('dotenv').config()


// database connection
require('./core/db.connect')()

// socket io
require('./core/io.server')(server)

const port = process.env.PORT || 8000

server.listen(port, (err) => {
  if (err) {
    console.log('there is a problem ', err)
  }
  console.log(`Server listening on http://localhost:${port}`)
})

module.exports = app