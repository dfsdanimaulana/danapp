'use strict'

const express = require('express')
const router = express.Router()
const { view, logout } = require('../controllers/chat.controller')
const { isAuth } = require('../core/middleware')

module.exports = (app) => {
  router.get('/', isAuth, view)
  router.post('/', logout)

  app.use('/chat', router)
}
