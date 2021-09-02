'use strict'

const router = require('express').Router()

const {
    view,
    showMessage,
    deleteAllMessage,
} = require('../controllers/chatroom.controller')

const { isAuth } = require('../utils/middleware')


router.delete('/', deleteAllMessage)
router.get('/api', showMessage)
router.get('/:id/:name', isAuth, view)

module.exports = router

