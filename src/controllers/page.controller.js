'use strict'

const { profile } = require('../models/methods')

const params = {}

exports.showData = async function (req, res) {
    const data = await profile.getData()
    params.data = data
    res.render('page', params)
}

exports.deleteData = async function (req, res) {
    const id = req.body.id
    await profile.deleteById(id)
    res.redirect('/page')
}
