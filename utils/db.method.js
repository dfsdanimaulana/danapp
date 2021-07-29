'use strict'

const { Profile } = require("../models/profile.model")

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

module.exports = { getData, getUser, deleteById, getByEmail, updateById }