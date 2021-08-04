'use strict'

const { Profile } = require("../models/profile.model")
const { Message } = require("../models/message.model")

const getData = () => {
    return Profile.find()
}

const getUser = (id) => {
    return Profile.findById(id)
} 

const deleteById = (id) => {
    return Profile.findByIdAndDelete(id)
} 

const getByEmail = (email) => {
    return Profile.findOne({ email })
} 

const updateById = (id,query) => {
    return Profile.findByIdAndUpdate(id,query, {new:true})
}

const saveMessage = (data) => {
    const message = new Message(data)
    message.save((err, result)=>{
        if(err) throw err
        console.log(result)
    })
}
module.exports = { saveMessage, getData, getUser, deleteById, getByEmail, updateById }