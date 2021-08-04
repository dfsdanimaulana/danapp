'use strict'

const express = require('express')
const router = express.Router()
const { view, logout } = require('../controllers/chat.controller')
const { isAuth, hasCookie } = require('../utils/middleware')

module.exports = (app) => {
  router.get('/logout', logout)
  router.get('/' ,hasCookie , isAuth, view)

  app.use('/chat', router)
}
