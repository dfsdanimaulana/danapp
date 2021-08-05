'use strict'

const {
    getData
} = require('../utils/db.method')

module.exports = {
    view: async (req, res) => {
        const data = await getData()
        const params = {
            currentUser: req.session.user._id,
            data,
        }
        res.render('chat', params)
    },

    logout: (req, res) => {
        if (req.cookies) {
            res.clearCookie('login')
            res.clearCookie('id')
        }
        req.session.destroy((err) => {
            if (err) throw err
            return res.redirect('/login')
        })
    }
}