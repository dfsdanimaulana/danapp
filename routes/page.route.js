'use strict'

const express = require('express')
const router = express.Router()

module.exports = (app) => {
  const { view } = require('../controllers/page.controller')

  router.get('/', view)

  app.use('/page', router)
}
