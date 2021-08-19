'use strict'

const { profile } = require('../models/methods')

const params = {}

module.exports = {
    view: async (req, res) => {
        const data = await profile.getData()
        params.data = data
        res.render('contacts', params)
    },
}
