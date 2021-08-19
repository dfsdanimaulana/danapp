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
const msgSchema = new Schema(
    {
        sender: {
            required: true,
            type: String,
        },
        reciver: {
            required: true,
            type: String,
        },
        message: {
            required: true,
            type: String,
        },
        isRead: {
            type: Boolean,
            default: false,
            },
            timeSend: {
                type: String,
                default: moment().format('hh:mm A'),
                },
            },
            opts
        )

        const Message = mongoose.model('Message', msgSchema)

        module.exports = {
            Message,
        }