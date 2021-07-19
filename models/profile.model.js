'use strict'

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

// const data = new Profile({
//     img:'images/Dani.jpg',
//     name:'Dani Mulana',
//     username: 'dnm17_',
//     password: '123',
//     email: 'danimaulana@SpeechGrammarList.com',
//     status:'hello world',
//     message: 'hai guys',
//     timeSend: '12:30 AM',
// });
// data.save().then(data => console.log(data) )

module.exports = {
            Profile
        }