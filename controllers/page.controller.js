'use strict'
const {
    getData,
    deleteById
} = require('../utils/db.method')

const params = {}

module.exports = {

    showData: async (req, res) => {
        const data = await getData()
        params.data = data
        res.render('page', params)
    },

    deleteData: async (req, res) => {
        const id = req.body.id
        await deleteById(id)
        res.redirect('/page')
    }

}