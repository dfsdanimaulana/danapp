const mongoose = require('mongoose')
const moment = require('moment')
const time = moment().format('hh:mm A')

const { Schema } = mongoose;

const ProfileSchema = new Schema({
    img: {
        type: String,
        default: 'images/Dani.jpg'
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Hello i'm using DanApp"
    },
    message: {
        type: String,
        default: "Hello i'm using DanApp"
    },
    timeSend: {
        type: String,
        default: time
    },
});

const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = {
            Profile
        }