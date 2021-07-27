'use strict'

const { Profile } = require("../models/profile.model")

const getData = () => {
    return Profile.find()
      .then((data) => data)
      .catch((err) => console.log('Data not found!', err))
}
const getUser = (id) => {
    return Profile.findById(id)
      .then((data) => data)
      .catch((err) => console.log('User not found', err))
} 
const deleteUser = (id) => {
    return Profile.findByIdAndDelete(id)
    .then(data=> console.log(data))
    .catch(err => console.log('Delete failed!', err))
    
} 
const getByEmail = (email) => {
    return Profile.findOne({ email })
      .then((data) => data)
      .catch((err) => console.log('Email not found!', err))
} 

module.exports = { getData, getUser, deleteUser, getByEmail }