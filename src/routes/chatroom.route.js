'use strict'

const express = require('express')
const router = express.Router()

const {
    view,
    showMessage,
    deleteAllMessage
} = require('../controllers/chatroom.controller')
const {
    isAuth
} = require('../utils/middleware')


module.exports = (app) => {
    router.delete('/', deleteAllMessage)
    router.get('/api', showMessage)
    router.get('/:id/:name', isAuth, view)
    app.use('/chatroom', router)
}