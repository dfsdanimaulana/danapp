'use strict'

const router = require('express').Router()

const { isAuth } = require('../utils/middleware')
const { view } = require('../controllers/contacts.controller')

router.get('/', isAuth, view)

module.exports = router