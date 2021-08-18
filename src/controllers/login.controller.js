'use strict'

const bcrypt = require('bcryptjs')

const {
    getByUsername,
    getByEmail
} = require('../utils/db.method')

const params = {}

module.exports = {

    view: (req, res) => {
        // redirect to chat if session is already set
        if (req.session.isAuth) {
            return res.redirect('/chat')
        }

        // set flash message if there is any error with login
        params.error = req.flash && req.flash('error')

        res.render('login', params)
    },

    cekUser: async (req, res) => {

        const {
            username,
            password,
            checkbox,
            guest
        } = req.body

        // login as guest
        if (guest) {
            const user = await getByUsername('dnm17')
            if (!user) return res.send('Guest Error!')
            req.session.isAuth = true
            req.session.user = user
            return res.redirect('/chat')
        }

        // cek if user exist
        const user = username.indexOf('@') !== -1 ?
        await getByEmail(username):
        await getByUsername(username)

        if (!user) {
            req.flash('error', `User not found!`)
            console.log(`can't find user in database!`)
            return res.redirect('/login')
        }

        // cek password
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            req.flash('error', 'Incorrect password')
            return res.redirect('/login')
        }

        req.session.isAuth = true

        // checkbox is checked?
        if (checkbox) {
            // set cookies
            const salt = await bcrypt.genSalt()
            const hashedCookie = await bcrypt.hash(user.username, salt)
            res.cookie('id', user._id, {
                expires: new Date(Date.now + 150000),
            })
            res.cookie('login', hashedCookie, {
                expires: new Date(Date.now + 150000),
            })
        }

        // set current user
        req.session.user = user

        return res.redirect('/chat')
    },
}