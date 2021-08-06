'use strict'

const express = require('express')
const {
    isAuth
} = require('../utils/middleware')
const router = express.Router()

module.exports = (app) => {
    const {
        showData,
        deleteData
    } = require('../controllers/page.controller')

    router.get('/', isAuth, showData)
    router.delete('/', deleteData)

    app.use('/page', router)
}