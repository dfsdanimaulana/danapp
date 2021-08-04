'use strict'

const express = require('express')
const router = express.Router()

const { view, showMessage } = require('../controllers/chatroom.controller')
const { isAuth } = require('../utils/middleware')


module.exports = (app) => {
  router.get('/api', showMessage)
  router.get('/delete')
  router.get('/:id/:name', isAuth, view)
  app.use('/chatroom', router)
}
