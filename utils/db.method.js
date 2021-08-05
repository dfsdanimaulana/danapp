'use strict'

const {
    Profile
} = require('../models/profile.model')
const {
    Message
} = require('../models/message.model')

module.exports = {

    getData: () => {
        return Profile.find()
    },

    getUser: (id) => {
        return Profile.findById(id)
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

    getMessageBySender: async (sender,
        reciver) => {
        const  data = await Message.find({
            sender
        })
        return data.filter(msg => msg.reciver === reciver)
    },

}