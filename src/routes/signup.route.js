'use strict'

const router = require('express').Router()

const { upload } = require('../utils/upload')
const { view, addUser, uploadImg } = require('../controllers/signup.controller')


router.post('/upload', upload.single('image'), uploadImg)
router.get('/', view)
router.post('/', addUser)

module.exports = router