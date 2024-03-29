'use strict'

const {
    message,
    profile
} = require('../models/methods')

const params = {}

module.exports = {
    view: async function (req, res) {
        const id = req.params.id
        const data = await profile.getUser(id)
        if (!data) {
            return res.redirect('/')
        }
        params.data = data
        params.currentUser = req.session.user._id
        params.error = req.flash && req.flash('duplicate_username')
        res.render('profile', params)
    },

    updateData: async function(req, res) {
        const data = req.body
        params.currentUser = req.session.user._id
        const oldName = req.session.user.username
        let query = {}

        switch (data.updater) {
            case 'username':
                data.dataValue = data.dataValue.replace(/ /g, '_')
                query = {
                    $set: {
                        username: data.dataValue,
                    },
                }
                try {
                    const updateSender = await message.updateSender(
                        data.dataValue,
                        oldName
                    )

                } catch (e) {
                    console.log(e)
                    res.send(e)
                }

                break

            case 'name':
                query = {
                    $set: {
                        name: data.dataValue,
                    },
                }
                break

            case 'email':
                query = {
                    $set: {
                        email: data.dataValue,
                    },
                }
                break

            default:
                query = {
                    $set: {
                        status: data.dataValue,
                    },
                }
                break
        }

        try {
            const newData = await profile.updateById(data.id, query)

            params.data = newData
            req.session.user = newData
            params.currentUser = req.session.user._id
            return res.render('profile', params)
        } catch (error) {
            if (error.codeName === 'DuplicateKey') {
                req.flash('duplicate_username', 'Username is already exists')
                return res.redirect(`/profile/${req.session.user._id}`)
            }
            console.log({
                error
            })
        }
    },

    getUsers: async function (req, res) {
        try {
            const user = await profile.getData()
            res.json(user)
        } catch (e) {
            res.send(e)
        }
    },

    deleteUser: async function(req, res) {
        try {
            const id = req.params.id
            await profile.deleteById(id)
            res.redirect('/chat/logout')
        } catch (e) {
            res.send(e)
        }
    },
}