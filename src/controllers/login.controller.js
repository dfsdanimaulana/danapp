'use strict'

const bcrypt = require('bcryptjs')

const { profile } = require('../models/methods')


exports.view = function (req, res) {
    // redirect to chat if session is already set
    if (req.session.isAuth) {
        return res.redirect('/chat')
    }
    // set flash message if there is any error with login
    
    res.render('login', {
        error: req.flash('erorr'),
    })
}

exports.cekUser = async function (req, res) {
    const { username, password, checkbox, guest } = req.body

    // login as guest
    if (guest) {
        const user = await profile.getByUsername('dnm17')
        if (!user) return res.send('Guest Error!')
        req.session.isAuth = true
        req.session.user = user
        return res.redirect('/chat')
    }

    // cek if user exist
    const user =
        username.indexOf('@') !== -1
            ? await profile.getByEmail(username)
            : await profile.getByUsername(username)

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
}
