'use strict'

const bcrypt = require('bcryptjs')
const { schema, validate } = require('../utils/validation')

const { profile } = require('../models/methods')

exports.view = function (req, res) {
    if (req.session.isAuth && req.session.user) {
        return res.redirect('/chat')
    }
    res.render('signup')
}

exports.addUser = async function (req, res) {
    try {
        const { error, value } = await schema.validate(req.body)
        if (error) {
            console.log(error)
            return res.send(error)
        }
        const data = value
        data.username = data.username.replace(/ /g, '_')
        const email = data.email
        const user = await profile.getByEmail(email)

        // cek if user alredy exists

        if (user) {
            req.flash('email_error', 'User already exists')
            return res.redirect('/signup')
        }

        // hash the password

        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(data.password, salt)
        data.password = hashedPassword

        await profile.saveUser(data)

        res.redirect('/contacts')
    } catch (e) {
        return res.send(e)
    }
}