'use strict'

const mongoose = require('mongoose')
const moment = require('moment')

const {
    Schema
} = mongoose

const ProfileSchema = new Schema({
    img: {
        type: String,
        default: 'images/Dani.jpg',
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        status: {
            type: String,
            default: "Hello i'm using DanApp",
            },
            message: {
                type: String,
                default: 'Hai guys...',
                },
                timeSend: {
                    type: String,
                    default: moment().format('hh:mm A'),
                    },
                })

            const Profile = mongoose.model('Profile', ProfileSchema)

            module.exports = Profile