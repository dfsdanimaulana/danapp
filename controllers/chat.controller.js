'use strict'

const {
    getData,
    getMessageBySender,
    getByUsername,
    getSomeUserByValue
} = require('../utils/db.method')

const params = {
    status: false
}
module.exports = {
    view: async (req, res) => {
        const data = await getData()
        if (!data) return res.send('Data not found')
        params.currentUser = req.session.user._id
        params.data = data
        res.render('chat', params)
    },

    displaySavedMessage: async (req, res) => {
        params.currentUser = req.session.user._id
        const sender = req.session.user.username
        const msg = await getMessageBySender(sender) // aray of object
        if (msg) {
            params.msg = msg
            // remove duplicate reciver
            const reciver = msg.map(v => v.reciver)
            .filter((v, i, arr) => arr.indexOf(v) === i)
            // get user by reciver
            let query = {
                username: {
                    $in: reciver
                }
            }
            params.data = await getSomeUserByValue(query)
            return res.render('chat', params)
        } else {
            console.log('msg not found')
        }
        res.render('chat', params)
    },

    logout: (req, res) => {
        if (req.cookies) {
            res.clearCookie('login')
            res.clearCookie('id')
        }
        req.session.destroy((err) => {
            if (err) throw err
            return res.redirect('/login')
        })
    }
}