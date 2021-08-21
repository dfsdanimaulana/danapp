'use strict'

const {
    Message
} = require('../schemas')

const debug = require('debug')('dev')

const message = {

    saveMessage: async function (data) {
        const  message = new Message(data)
        try {
            const result = await message.save()
            debug(result)
        } catch (e) {
            console.log(e)
        }
    },

    getAllMessage: function () {
        return Message.find().sort({
            sender: 1
        })
    },

    updateSender: function (newName,
        oldName) {
        return Message.updateMany({
            sender: oldName
        },
            {
                sender: newName
            })
    },

    getMessageBySender: async function (sender,
        reciver) {

        const  data = await Message.find({
            sender
        })
        if (reciver) return data.filter(msg => msg.reciver === reciver)
        return data
    },

    deleteMessage: function () {
        Message.collection.drop()
    }
}

module.exports = message