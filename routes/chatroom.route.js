'use strict'

const express = require('express')
const router = express.Router()

const { view } = require('../controllers/chatroom.controller')
const { isAuth } = require('../utils/middleware')

module.exports = (app) => {
    
  router.get('/:id/:name',view )

  app.use('/chatroom', router)
}
