'use strict'

const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const cors = require('cors')

// allow request from another domain
app.use(cors())

// built-in middleware yg di gunakan untuk memparsing data yg dikirm melalui url
app.use(express.urlencoded({ extended: true }))

// content type json
app.use(express.json())

// method-override
app.use(methodOverride('_method'))

// session
require('./src/utils/session')(app)

// cookies
app.use(cookieParser('secret string'))

// flash message : only can use once so it will disappear when already used
app.use(flash())

// view engine
app.set('view engine', 'ejs')

// access public folder
app.use(express.static(path.join(__dirname, './public')))

// access images folder
app.use('/images', express.static(path.join(__dirname, './images')))

// routes
require('./src/routes')(app)

// page not found handlers

const { isAuth } = require('./src/utils/middleware')

app.use('/', isAuth, (req, res) => {
    res.status(404).send('404 | Page not found')
})

module.exports = app
