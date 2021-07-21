'use strict'

const express = require('express')
const methodOverride = require('method-override')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

require('dotenv').config()
const app = express()
const server = http.createServer(app)
const port = 3000 || process.env.PORT
const io = socketio(server)

// database connection
const database = require('./core/db.connect')
database.db.on('error', console.error.bind(console, 'connection error:'))
database.db.once('open', function () {
  console.log('Database Connected!')
})

//access public folder
app.use(express.static(path.join(__dirname,'public')))

// built-in middleware yg di gunakan untuk memparsing data yg dikirm melalui url
app.use(express.urlencoded({ extended: true }))

// method-override
app.use(methodOverride('_method'))

// view engine
app.set('view engine', 'ejs')

// layouts
app.use(expressLayouts)


// router
require('./routes')(app)

// socket io
const socketConnect = require('./core/io.connect')
io.on('connection', socket => socketConnect(socket, io))

// error page
app.get('/404', (req, res) => {
  const params = {
    layout: 'layouts/html',
    title: 'page not found',
    style: '404',
    script: '404',
  }
  res.status(404)
  res.render('error/404', params)
})

app.use('/', (req, res) => {
  res.redirect(301, '/404')
})

server.listen(port, (err) => {
  if (err) {
    console.log('there is a problem ', err)
  }
  console.log(`App listening on http://localhost/${port}`)
})
