'use strict'

const express = require('express')
const router = express.Router()

module.exports = (app) => {
  const {showData} = require('../controllers/page.controller')

  router.get('/', showData)

  app.use('/page', router)
}
