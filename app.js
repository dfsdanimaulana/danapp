/* eslint-disable no-undef */
'use strict'

const path = require('path')
const express = require('express')
const methodOverride = require('method-override')
const expressLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
// server connection
const app = require('./core/server')
const { authenticationToken, userAuth } = require('./core/middleware')

// session
require('./core/session')(app)

// cookies
app.use(cookieParser())

// built-in middleware yg di gunakan untuk memparsing data yg dikirm melalui url
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// method-override
app.use(methodOverride('_method'))

// access public folder
app.use(express.static(path.join(__dirname, '/public')))

// view engine
app.set('view engine', 'ejs')

// layouts
app.use(expressLayouts)

const posts = [
  {
    email:'a@g.com',
    password: '1'
  }
]

app.get('/posts', authenticationToken, (req, res) => {
  res.json(posts.filter(post => post.email === req.body.email))
})

// router
require('./routes')(app)

// page not found handlers
app.use('/', (req, res) => {
  res.render('404', { layout: false })
})
