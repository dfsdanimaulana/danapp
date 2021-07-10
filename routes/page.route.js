const express = require('express')
const router = express.Router()

module.exports = (app) => {
    const page = require('../controllers/page.controller')

    router.get('/', page.view)

    app.use('/page', router)
}