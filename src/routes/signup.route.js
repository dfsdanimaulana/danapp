'use strict'

const router = require('express').Router()

const { view, addUser } = require('../controllers/signup.controller')

router.get('/', view)
router.post('/', addUser)

module.exports = router