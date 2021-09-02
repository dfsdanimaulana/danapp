'use strict'

const router = require('express').Router()

const { isAuth } = require('../utils/middleware')
const { showData, deleteData } = require('../controllers/page.controller')

module.exports = (app) => {
    router.get('/', isAuth, showData)
    router.delete('/', deleteData)

    app.use('/page', router)
}
