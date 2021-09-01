'use strict'

const bcrypt = require('bcryptjs')

const {
    message,
    profile
} = require('../models/methods')


// cek if session is already set or not
exports.isAuth = function (req, res, next) {
    req.session.isAuth && req.session.user ? next(): res.redirect('/login')
}

// cek if cookie is already set or not
exports.hasCookie = async function (req, res, next) {

    const cookie = req.cookies

    if (cookie.id && cookie.login) {
        try {
            const data = await profile.getUser(cookie.id)
            const cekCookie = await bcrypt.compare(
                data.username,
                cookie.login
            )
            if (cekCookie) {
                req.session.isAuth = true
                req.session.user = data
            }
        } catch (e) {
            console.log(e)
            return res.send('cookie validation error!')
        }
    }
    next()
}