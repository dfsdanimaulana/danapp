'use strict'

const multer = require('multer')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname)
    },
})

exports.upload = multer({ storage: fileStorage })
