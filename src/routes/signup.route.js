'use strict'

const express = require('express')
const router = express.Router()

module.exports = (app) => {
    const {
        view,
        addUser,
        uploadImg
    } = require('../controllers/signup.controller')

    router.post('/upload', uploadImg)
    router.get('/', view)
    router.post('/', addUser)

    app.use('/signup', router)
}