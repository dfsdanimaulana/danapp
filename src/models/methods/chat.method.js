'use strict'

const {
    Chat
} = require('../schemas')

module.exports = {
    saveMessage: async function(data) {
        const chat = new Chat(data)
        await chat.save()
    }
}