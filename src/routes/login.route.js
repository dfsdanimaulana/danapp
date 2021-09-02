'use strict'

const router = require('express').Router()

const { hasCookie } = require('../utils/middleware')
const { view, cekUser } = require('../controllers/login.controller')


router.get('/', hasCookie, view)
router.post('/', cekUser)

module.exports = router

