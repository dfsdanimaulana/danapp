'use strict'

const {
    getUser,
    getAllMessage,
    getMessageBySender,
} = require('../utils/db.method')

const params = {}

module.exports = {
    view: async (req, res) => {
        const id = req.params.id
        const data = await getUser(id)
        if (!data) return res.send('user not found')
        params.currentUser = req.session.user.username
        params.data = data
        // get message from database by sender and reciver
        const sender = req.session.user.username
        const reciver = data.username
        const msg = await getMessageBySender(sender, reciver)
        if (!msg) {
            console.log('message not found')
        } else {
            params.msg = msg
        }
        res.render('chatroom', params)
    },

    showMessage: async (req, res) => {
        try {
            const data = await getAllMessage()
            if (!data) {
                return res.send('data not found')
            }
            console.log(data)
            params.data = data
            res.render('chatsfile', params)
        } catch (e) {
            res.send(e)
        }
    },
}