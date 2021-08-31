'use strict'

const multer = require('multer')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images') // folder tempat menyimpan images
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname)
    },
})

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/pmg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = (app) => {
    app.use(
        multer({
            storage: fileStorage,
            fileFilter: fileFilter,
        }).single('image') // for body api
    )
}
