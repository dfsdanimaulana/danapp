'use strict'

const mongoose = require('mongoose')
const {
    Schema
} = mongoose
const moment = require('moment')

const opts = {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    },
}

const schema = {
    user: {
        type: String,
        required: true
    },
    message: [{
        sender: String,
        content: String,
        isRead: {
            type: Boolean,
            default: false,
            },
            timeSend: {
                type: String,
                default: moment().format('hh:mm A')
                }
            }]
    }
        const chatSchema = new Schema(schema, opts)

        const Chat = mongoose.model('Chat', chatSchema)

        module.exports = Chat