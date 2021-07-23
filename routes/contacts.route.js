'use strict'

const express = require('express')
const { isAuth } = require('../core/middleware')
const router = express.Router()

module.exports = (app) => {
  const { view }= require('../controllers/contacts.controller')

  router.get('/',isAuth, view)

  app.use('/contacts', router)
}
