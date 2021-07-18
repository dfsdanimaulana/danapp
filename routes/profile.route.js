const express = require('express')
const router = express.Router()

module.exports = (app) => {
  const {view, addData} = require('../controllers/profile.controller')

  router.get('/:id', view)
  router.get('/', view)
  router.post('/', addData)
  

  app.use('/profile', router)
}