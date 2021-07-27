'use strict'

const express = require('express')
const { isAuth } = require('../utils/middleware')
const router = express.Router()

module.exports = (app) => {
  const {view } = require('../controllers/profile.controller')

  router.get('/:id', isAuth,view)
  

  app.use('/profile', router)
}