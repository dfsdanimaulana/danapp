'use strict'

const { Profile } = require('../schemas')

const debug = require('debug')('dev')

const profile = {
    getData: function () {
        return Profile.find().sort({
            name: 1,
        })
    },

    getUser: function (id) {
        return Profile.findById(id)
    },

    getByUsername: function (username) {
        return Profile.findOne({
            username,
        })
    },

    deleteById: function (id) {
        return Profile.findOneAndDelete({
            _id: id,
        })
    },

    getByEmail: function (email) {
        return Profile.findOne({
            email,
        })
    },

    updateById: function (id, query) {
        return Profile.findByIdAndUpdate(id, query, {
            new: true,
        })
    },

    saveUser: function (data) {
        const user = new Profile(data)
        user.save((err, result) => {
            if (err) throw err
            console.log(result)
        })
    },

    getSomeUserByValue: function (query) {
        return Profile.find(query)
    },
    getImageById: function (id) {
        return Profile.findOne({ _id:id },'image')
    },
    saveImageToDB: function (path, id) {
        const image = path.split('\\')[1]
        return Profile.findByIdAndUpdate(
            id,
            {
                image: image,
            },
            {
                new: true,
            }
        )
    },
}

module.exports = profile
