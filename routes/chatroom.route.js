'use strict'

const express = require('express')
const router = express.Router()

const { view } = require('../controllers/chatroom.controller')
const { isAuth } = require('../core/middleware')

module.exports = (app) => {
    
  router.get('/:name', isAuth,view)

  app.use('/chatroom', router)
}
