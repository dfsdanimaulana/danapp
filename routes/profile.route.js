'use strict'

const express = require('express')
const { isAuth } = require('../utils/middleware')
const router = express.Router()

module.exports = (app) => {
  const {view, updateData,getUsers } = require('../controllers/profile.controller')

  router.get('/api',getUsers)
  router.get('/search',(req, res)=>{
      res.render('livesearch',{layout:false})
  })
  router.get('/:id', isAuth,view)
  router.put('/', updateData)
  

  app.use('/profile', router)
}