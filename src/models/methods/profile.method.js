'use strict'

const { Profile } = require('../schemas/profile.model')

const profile = {
    getData: () => {
        return Profile.find().sort({
            name: 1,
        })
    },

    getUser: (id) => {
        return Profile.findById(id)
    },

    getByUsername: (username) => {
        return Profile.findOne({
            username,
        })
    },

    deleteById: (id) => {
        return Profile.findOneAndDelete({
            _id: id,
        })
    },

    getByEmail: (email) => {
        return Profile.findOne({
            email,
        })
    },

    updateById: (id, query) => {
        return Profile.findByIdAndUpdate(id, query, {
            new: true,
        })
    },

    saveUser: (data) => {
        const user = new Profile(data)
        user.save((err, result) => {
            if (err) throw err
            console.log(result)
        })
    },
    
    getSomeUserByValue: (query) => {
        return Profile.find(query)
    },
}


module.exports = profile