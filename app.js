/* eslint-disable no-undef */
'use strict'

const express = require('express')
const http = require('http')
const methodOverride = require('method-override')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
require('dotenv').config()

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 8000

// database connection
require('./core/db.connect')()

//access public folder
app.use(express.static(path.join(__dirname, '/public')))

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

// page not found handlers
app.use('/', (req, res) => {
  res.render('404', {layout:'layouts/404'})
})

// socket io
require('./core/io.server')(server)

server.listen(port, (err) => {
  if (err) {
    console.log('there is a problem ', err)
  }
  console.log(`Server listening on http://localhost:${port}`)
})
