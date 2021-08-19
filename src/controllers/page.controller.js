'use strict'

const { profile } = require('../models/methods')

const params = {}

module.exports = {
    showData: async (req, res) => {
        const data = await profile.getData()
        params.data = data
        res.render('page', params)
    },

    deleteData: async (req, res) => {
        const id = req.body.id
        await profile.deleteById(id)
        res.redirect('/page')
    },
}
