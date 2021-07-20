'use strict'

const express = require('express')
const router = express.Router()
const { view } = require('../controllers/chatroom.controller')

module.exports = (app) => {
  router.get('/', view)

  app.use('/chatroom', router)
}
