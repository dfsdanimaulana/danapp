const express = require('express')
const router = express.Router()

module.exports = (app) => {
  const chat = require('../controllers/chat.controller')

  router.get('/', chat.view)

  app.use('/chat', router)
}
