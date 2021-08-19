'use strict'

const { Message } = require('../schemas/message.model')


const message = {

  saveMessage: (data) => {
        const  message = new Message(data)
        message.save((err, result) => {
            if (err) throw err
            console.log(result)
        })
    },

    getAllMessage: () => {
        return Message.find().sort({
            sender: 1
        })
    },

    updateSender: (newName,
        oldName) => {
        Message.updateMany({
            sender: oldName
        },
            {
                sender: newName
            })
    },

    getMessageBySender: async (sender,
        reciver) => {

        const  data = await Message.find({
            sender
        })
        if (reciver) return data.filter(msg => msg.reciver === reciver)
        return data
    },


    deleteMessage: () => {
        Message.collection.drop()
    }
}

module.exports = message