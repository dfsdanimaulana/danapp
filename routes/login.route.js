'use strict'

const express = require('express')
const router = express.Router()

module.exports = (app) => {
  const { view, cekUser }= require('../controllers/login.controller')

  router.get('/', view)
  router.post('/', cekUser)
  app.use('/login', router)
}
