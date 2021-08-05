'use strict'

const app = require('express')()
const server = require('http').createServer(app)
const chalk = require('chalk')

require('dotenv').config()

const port = process.env.PORT || 8000

// database connection
require('./db.connect')()

// socket io
require('./io.server')(server)

server.listen(port, (err) => {
  if (err) {
    console.log(chalk.red.bgYellow('there is a problem ', err))
  }
  console.log(chalk.yellow.italic(`Server listening on ${chalk.red.underline(`http://localhost:${port}`)}`))
})

module.exports = app