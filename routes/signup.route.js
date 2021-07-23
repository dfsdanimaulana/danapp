'use strict'

const express = require('express')
const router = express.Router()

module.exports = (app) => {
  const {view, show} = require('../controllers/signup.controller')

  router.get('/', view)
  router.post('/', show)

  app.use('/signup', router)
}
