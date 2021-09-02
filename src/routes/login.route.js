'use strict'

const router = require('express').Router()

const { hasCookie } = require('../utils/middleware')
const { view, cekUser } = require('../controllers/login.controller')

module.exports = (app) => {
    router.get('/', hasCookie, view)
    router.post('/', cekUser)
    app.use('/login', router)
}
