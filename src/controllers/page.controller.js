'use strict'

const {
    profile
} = require('../models/methods')

const params = {}

module.exports = {
    showData: async function (req, res) {
        const data = await profile.getData()
        params.data = data
        res.render('page', params)
    },

    deleteData: async function(req, res) {
        const id = req.body.id
        await profile.deleteById(id)
        res.redirect('/page')
    },
}