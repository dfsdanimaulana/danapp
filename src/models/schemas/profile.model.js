'use strict'

const moment = require('moment')

const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    image: {
        type: String,
        default: 'male.png',
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        default: 'male'
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
    timeSend: {
        type: String,
        default: moment().format('hh:mm A'),
    },
})

const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = Profile
