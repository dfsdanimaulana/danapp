'use strict'

const express = require('express')
const router = express.Router()
const { view }= require('../controllers/chat.controller')

module.exports = (app) => {

  router.get('/', view)

  app.use('/chat', router)
}
