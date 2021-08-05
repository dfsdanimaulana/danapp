'use strict'

const {
    getData
} = require("../utils/db.method")


const params = {}

module.exports = {

    view: async (req, res) => {
        const data = await getData()
        params.data = data
        res.render('contacts', params)
    }

}