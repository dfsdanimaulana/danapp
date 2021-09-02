'use strict'

const router = require('express').Router()


const { isAuth } = require('../utils/middleware')
const { view } = require('../controllers/contacts.controller')

module.exports = (app) => {
    router.get('/', isAuth, view)

    app.use('/contacts', router)
}
