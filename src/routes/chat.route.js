'use strict'

const router = require('express').Router()

const {
    view,
    logout,
    displaySavedMessage
} = require('../controllers/chat.controller')
const {
    isAuth,
    hasCookie
} = require('../utils/middleware')

module.exports = (app) => {
    router.get('/logout', logout)
    router.get('/backup', view)
    router.get('/', hasCookie, isAuth, displaySavedMessage)

    app.use('/chat', router)
}