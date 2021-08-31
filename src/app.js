'use strict'

const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

// set header cors policy browser

app.use((req, res, next) => {
    // mengizinkan api kita di aksess dari dalam website manapun
    res.setHeader('Access-Control-Allow-Origin', '*')
    // http method yg di izinkan
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    // SET header content type and authorization
    res.setHeader('Access-Control-Allow-Headers', 'Content/Type, Authorization')
    next()
})

// built-in middleware yg di gunakan untuk memparsing data yg dikirm melalui url
app.use(
    express.urlencoded({
        extended: true,
    })
)
// content type json
app.use(express.json())

// method-override
app.use(methodOverride('_method'))

// session
require('./utils/session')(app)

// cookies
app.use(
    cookieParser('secret string', {
        expires: new Date(Date.now + 150000),
    })
)

// flash message : only can use once so it will disappear when already used
app.use(flash())

// view engine
app.set('view engine', 'ejs')

// access public folder
app.use(express.static(path.join(__dirname, '../public')))

// upload file handler
require('./utils/uploadImg')(app)

// router
require('./routes')(app)

// page not found handlers

const { isAuth } = require('./utils/middleware')

app.use('/', isAuth, (req, res) => {
    res.status(404).render('404')
})

module.exports = app
