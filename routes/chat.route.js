const express = require('express')
const router = express.Router()

module.exports = (app) => {
  const { view }= require('../controllers/chat.controller')

  router.get('/', view)

  app.use('/chat', router)
}
