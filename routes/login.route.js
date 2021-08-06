'use strict'

const express = require('express')
const router = express.Router()
const {
    hasCookie
} = require('../utils/middleware')


module.exports = (app) => {
    const {
        view,
        cekUser
    } = require('../controllers/login.controller')

    router.get('/', hasCookie, view)
    router.post('/', cekUser)
    app.use('/login', router)
}