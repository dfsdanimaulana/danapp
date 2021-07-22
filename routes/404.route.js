'use strict'

const express = require('express')
const router = express.Router()

module.exports = (app) => {

  router.get('/', (req, res) => {
    const params = {
        layout: 'layouts/html',
        title: 'page not found',
        style: '404',
        script: '404',
    }
    res.status(404)
    res.render('error/404', params)
  })

  app.use('/404', router)
}
