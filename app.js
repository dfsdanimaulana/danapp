/* eslint-disable no-undef */
'use strict'

const express = require('express')
const methodOverride = require('method-override')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')

// server connection
const app = require('./core/server')

// session
require('./core/session')(app)

// built-in middleware yg di gunakan untuk memparsing data yg dikirm melalui url
app.use(express.urlencoded({ extended: true }))

// method-override
app.use(methodOverride('_method'))

// access public folder
app.use(express.static(path.join(__dirname, '/public')))

// view engine
app.set('view engine', 'ejs')

// layouts
app.use(expressLayouts)

// router
require('./routes')(app)

// page not found handlers
app.use('/', (req, res) => {
  res.render('404', { layout: 'layouts/404' })
})
