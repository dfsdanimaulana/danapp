'use strict'

const { message, profile } = require('../models/methods')
const debug = require('debug')('dev')

const params = {}

module.exports = {
    view: async function (req, res) {
        const id = req.params.id
        const data = await profile.getUser(id)
        if (!data) return res.send('user not found')
        params.currentUser = req.session.user.username
        params.data = data
        // get message from database by sender and reciver
        const sender = req.session.user.username
        const reciver = data.username
        const msg = await message.getMessageBySender(sender, reciver)
        if (!msg) {
            console.log('message not found')
        } else {
            params.msg = msg
        }
        res.render('chatroom', params)
    },

    showMessage: async function (req, res) {
        try {
            const messages = await message.getAllMessage()
            if (!messages) {
                return res.send('data not found')
            }
            params.messages = messages
            res.render('chatsfile', params)
        } catch (e) {
            res.send(e)
        }
    },
    deleteAllMessage: async function (req, res) {
        try {
            const result = await message.deleteMessage()
            debug(result)
            res.redirect('/chat')
        } catch (e) {
            res.send(e)
        }
    },
}
