'use strict'

const joi = require('joi')
const bcrypt = require('bcryptjs')
const {
    getUser
} = require('./db.method')

module.exports = {
    // cek if session is already set or not
    isAuth: (req, res, next) => {
        if (req.session.isAuth && req.session.user) {
            next()
        } else {
            return res.redirect('/login')
        }
    },

    // cek if cookie is already set or not
    hasCookie: async (req, res, next) => {
        const cookie = req.cookies
        if (cookie.id && cookie.login) {
            try {
                const name = await getUser(cookie.id)
                const cekCookie = await bcrypt.compare(name.username, cookie.login)
                if (cekCookie) {
                    req.session.isAuth = true
                    req.session.user = name
                }
            } catch (e) {
                console.log(e)
            }
        }
        next()
    }
}