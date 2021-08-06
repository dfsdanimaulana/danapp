'use strict'

const express = require('express')
const router = express.Router()

module.exports = (app) => {
    const {
        view,
        addUser
    } = require('../controllers/signup.controller')

    router.get('/', view)
    router.post('/', addUser)

    app.use('/signup', router)
}