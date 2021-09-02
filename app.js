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
app.use('/chat', require('./src/routes/chat.route'))
app.use('/chatroom', require('./src/routes/chatroom.route'))
app.use('/contacts', require('./src/routes/contacts.route'))
app.use('/profile', require('./src/routes/profile.route'))
app.use('/login', require('./src/routes/login.route'))
app.use('/signup', require('./src/routes/signup.route'))
app.use('/page', require('./src/routes/page.route'))

// page not found handlers
const { isAuth } = require('./src/utils/middleware')

app.use('/', isAuth, (req, res) => {
    res.status(404).send('404 | Page not found')
})

module.exports = app
