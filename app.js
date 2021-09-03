'use strict'

const path = require('path')
const express = require('express')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const cors = require('cors')
const session = require('express-session')

const app = express()

// allow request from another domain
app.use(cors())

// built-in middleware yg di gunakan untuk memparsing data yg dikirm melalui url
app.use(express.urlencoded({ extended: true }))

// content type json
app.use(express.json())

// method-override
app.use(methodOverride('_method'))

// session
app.use(
    session({
        secret: 'key that will sign cookie in the browser',
        resave: true,
        saveUninitialized: true,
        cookie: {
            // maxAge:6000,
            // secure : true, -> enable in https
            httpOnly: true, // only send through server and browser
        },
    })
)

// cookies
app.use(cookieParser('secret string'))

// flash message : only can use once so it will disappear when already used
app.use(flash())

// view engine
app.set('view engine', 'ejs')

// set static folder
app.use(express.static(path.join(__dirname, './public')))
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
