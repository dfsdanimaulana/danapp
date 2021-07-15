const express = require('express')
const router = express.Router()

module.exports = (app) => {
  const signup = require('../controllers/signup.controller')

  router.get('/', signup.view)

  app.use('/signup', router)
}
