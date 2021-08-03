/* eslint-disable no-undef */
'use strict'

const path = require('path')
const express = require('express')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
// server connection
const app = require('./core/server')
const { authenticationToken, isAuth } = require('./utils/middleware')

// session
require('./utils/session')(app)

// cookies
app.use(cookieParser())

// flash message
app.use(flash())

// built-in middleware yg di gunakan untuk memparsing data yg dikirm melalui url
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// method-override
app.use(methodOverride('_method'))

// access public folder
app.use(express.static(path.join(__dirname, '/public')))

// view engine
app.set('view engine', 'ejs')

const posts = [
  {
    email: 'a@g.com',
    password: '1',
  },
]

app.get('/posts', authenticationToken, (req, res) => {
  res.json(posts.filter((post) => post.email === req.body.email))
})

// router
require('./routes')(app)

// page not found handlers
app.use('/', isAuth, (req, res) => {
  res.render('404')
})
