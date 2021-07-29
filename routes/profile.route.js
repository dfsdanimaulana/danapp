'use strict'

const express = require('express')
const { isAuth } = require('../utils/middleware')
const router = express.Router()

module.exports = (app) => {
  const {view, updateData } = require('../controllers/profile.controller')

  router.get('/:id', isAuth,view)
  router.put('/', updateData)
  

  app.use('/profile', router)
}