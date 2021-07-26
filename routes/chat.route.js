'use strict'

const express = require('express')
const router = express.Router()
const { view, logout } = require('../controllers/chat.controller')
const { isAuth, hasCookie } = require('../core/middleware')

module.exports = (app) => {
  router.get('/' ,hasCookie , isAuth, view)
  router.post('/', logout)

  app.use('/chat', router)
}
