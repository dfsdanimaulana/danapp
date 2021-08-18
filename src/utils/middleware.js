'use strict'

const bcrypt = require('bcryptjs')
const {
    getUser
} = require('./db.method')

module.exports = {
    // cek if session is already set or not
    isAuth: (req, res, next) => {
        req.session.isAuth && req.session.user ? next(): res.redirect('/login')
    },

    // cek if cookie is already set or not
    hasCookie: async (req, res, next) => {
        try {
            const cookie = req.cookies
            if (cookie.id && cookie.login) {
                const name = await getUser(cookie.id)
                const cekCookie = await bcrypt.compare(
                    name.username,
                    cookie.login
                )
                if (cekCookie) {
                    req.session.isAuth = true
                    req.session.user = name
                }
            }
            next()
        } catch (e) {
            res.send(e)
        }
    },
}