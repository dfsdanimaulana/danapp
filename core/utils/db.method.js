'use strict'

const { Profile } = require("../../models/profile.model")

const getData = () => {
    const data = Profile.find()
    if(!data){
        console.log('Cant get data from database')
        return false
    } else {
        return data
    }
}
const getUser = (id) => {
    const data = Profile.findById(id)
    if (!data) {
      console.log('Cant get user from database')
      return false
    } else {
      return data
    }
} 
const deleteUser = (id) => {
    const data = Profile.findByIdAndDelete(id)
    if (!data) {
      console.log('Delete failed!')
      return false
    } else {
      return data
    }
} 
const getByEmail = (email) => {
    const data = Profile.findOne({email})
    if (!data) {
      console.log('Email not registered!')
      return false
    } else {
      return data
    }
} 

module.exports = { getData, getUser, deleteUser, getByEmail }