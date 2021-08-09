'use strict'

require('dotenv').config()
const bcrypt = require('bcryptjs')

const {
    getByUsername
} = require('../utils/db.method')

const params = {}

module.exports = {
    view: (req, res) => {
        if (req.session.isAuth) {
            return res.redirect('/chat')
        }
        params.email_error = req.flash && req.flash('email_error')
        params.password_error = req.flash && req.flash('password_error')

        res.render('login', params)
    },

    cekUser: async (req, res) => {
        const {
            username,
            password,
            checkbox
        } = req.body
        const {
            guest
        } = req.body
        if (guest) {
            const user = await getByUsername('dnm17')
            req.session.isAuth = true
            req.session.user = user

            return res.redirect('/chat')
        }
        const user = await getByUsername(username)
        if (!user) {
            req.flash('email_error', 'Username not found, please register first')
            return res.redirect('/login')
        }

        try {
            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                req.flash('password_error', 'Incorrect password')
                return res.redirect('/login')
            }

            req.session.isAuth = true

            if (checkbox) {
                const salt = await bcrypt.genSalt()
                const hashedCookie = await bcrypt.hash(user.username, salt)
                res.cookie('id', user._id, {
                    expires: new Date(Date.now + 150000),
                })
                res.cookie('login', hashedCookie, {
                    expires: new Date(Date.now + 150000),
                })
            }
            req.session.user = user
            return res.redirect('/chat')
        } catch (err) {
            return res.status(500).send(err)
        }
    },
}