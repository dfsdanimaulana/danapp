const express = require('express')
const router = express.Router()

module.exports = (app) => {
  const profile = require('../controllers/profile.controller')

  router.get('/', profile.view)
  router.post('/', profile.addData)
  

  app.use('/profile', router)
}
