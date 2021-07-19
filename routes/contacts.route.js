'use strict'

const express = require('express')
const router = express.Router()

module.exports = (app) => {
  const { view }= require('../controllers/contacts.controller')

  router.get('/', view)

  app.use('/contacts', router)
}