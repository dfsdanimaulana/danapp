'use strict'

const path = require('path')
const express = require('express')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

const {
    isAuth
} = require('./utils/middleware')

// server connection
const app = require('./core/server')

// built-in middleware yg di gunakan untuk memparsing data yg dikirm melalui url
app.use(express.urlencoded({
    extended: true
}))
// content type json
app.use(express.json())

// method-override
app.use(methodOverride('_method'))

// session
require('./utils/session')(app)

// cookies
app.use(cookieParser())

// flash message
app.use(flash())

// view engine
app.set('view engine', 'ejs')

// access public folder
app.use(express.static(path.join(__dirname, '/public')))

// router
require('./routes')(app)

// page not found handlers
app.use('/', isAuth, (req, res) => {
    res.render('404')
})