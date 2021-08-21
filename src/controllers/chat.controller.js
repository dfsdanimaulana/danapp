'use strict'

const debug = require('debug')('dev')

const { message, profile } = require('../models/methods')

const params = {
    status: [1, 2, 3],
}

module.exports = {
    view: function (req, res) {
        res.render('chat', params)
    },

    displaySavedMessage: async function (req, res) {
        // get logged user by session
        params.currentUser = req.session.user._id

        // query user message in database by sender
        const sender = req.session.user.username
        const msg = await message.getMessageBySender(sender) // array of object
        debug(msg)
        if (msg) {
            params.msg = msg
            // remove duplicate reciver
            const reciver = msg
                .map((v) => v.reciver)
                .filter((v, i, arr) => arr.indexOf(v) === i)
            // get and display user by reciver
            let query = {
                username: {
                    $in: reciver,
                },
            }
            const data = await profile.getSomeUserByValue(query)
            if (!data) return res.send('Can not display user reciver')
            params.data = data
            return res.render('chat', params)
        }

        res.render('chat', params)
    },

    logout: function (req, res) {
        if (req.cookies) {
            res.clearCookie('login')
            res.clearCookie('id')
        }
        req.session.destroy((err) => {
            if (err) throw err
            return res.redirect('/login')
        })
    },
}
