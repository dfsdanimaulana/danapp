'use strict'

const router = require('express').Router()

const { isAuth } = require('../utils/middleware')
const { showData, deleteData } = require('../controllers/page.controller')

router.get('/', isAuth, showData)
router.delete('/', deleteData)

module.exports = router
