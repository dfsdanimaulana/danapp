'use strict'

const {
    Profile
} = require('../models/profile.model')
const {
    Message
} = require('../models/message.model')

module.exports = {

    getData: () => {
        return Profile.find().sort({
            name: 1
        })
    },

    getUser: (id) => {
        return Profile.findById(id)
    },
    getByUsername: (username) => {
        return Profile.findOne({
            username
        })
    },
    deleteById: (id) => {
        return Profile.findOneAndDelete({
            _id: id
        })
    },

    getByEmail: (email) => {
        return Profile.findOne({
            email
        })
    },

    updateById: (id, query) => {
        return Profile.findByIdAndUpdate(id, query, {
            new: true
        })
    },

    saveUser: (data) => {
        const user = new Profile(data)
        user.save((err, result) => {
            if (err) throw err
            console.log(result)
        })
    },

    saveMessage: (data) => {
        const  message = new Message(data)
        message.save((err, result) => {
            if (err) throw err
            console.log(result)
        })
    },

    getAllMessage: () => {
        return Message.find()
    },

    updateSender: async (newName,
        oldName) => {
        console.log(` newName: ${newName}, oldName: ${oldName}`)
        return Message.updateMany({
            sender: oldName
        },
            {
                sender: newName
            })
    },

    getMessageBySender: async (sender,
        reciver = 'someone') => {

        const  data = await Message.find({
            sender
        })
        if (reciver === 'someone') return data
        return data.filter(msg => msg.reciver === reciver)
    },
    getSomeUserByValue: (query) => {
        return Profile.find(query)
    }
}