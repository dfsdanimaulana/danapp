'use strict'

const {
    getUser,
    updateById,
    getData,
    deleteById,
    updateSender,
} = require('../utils/db.method')

const params = {}

module.exports = {
    view: async (req, res) => {
        const id = req.params.id
        const data = await getUser(id)
        if (!data) {
            return res.redirect('/')
        }
        params.data = data
        params.currentUser = req.session.user._id
        params.error = req.flash && req.flash('duplicate_username')
        res.render('profile', params)
    },

    updateData: (req, res) => {
        const data = req.body
        params.currentUser = req.session.user._id
        const oldName = req.session.user.username
        let query

        switch (data.updater) {
            case 'username':
                data.dataValue = data.dataValue.replace(/ /g, '_')
                query = {
                    $set: {
                        username: data.dataValue,
                    },
                }
                updateSender(data.dataValue, oldName).catch((e) =>
                    console.log(e)
                )
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

        updateById(data.id, query)
        .then((result) => {
            params.data = result
            req.session.user = result
            params.currentUser = req.session.user._id
            return res.render('profile', params)
        })
        .catch((err) => {
            if (err) {
                if (err.codeName === 'DuplicateKey') {
                    req.flash(
                        'duplicate_username',
                        'Username is already exists'
                    )
                    return res.redirect(`/profile/${req.session.user._id}`)
                }
            }
            res.send(err)
        })
    },

    getUsers: async (req,
        res) => {
        try {
            const user = await getData()
            res.json(user)
        } catch (e) {
            res.send(e)
        }
    },

    deleteUser: async (req,
        res) => {
        try {
            const id = req.params.id
            await deleteById(id)
            res.redirect('/chat/logout')
        } catch (e) {
            res.send(e)
        }
    },
}