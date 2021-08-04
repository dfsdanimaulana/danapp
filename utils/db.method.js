'use strict'

const { Profile } = require('../models/profile.model')

const getData = () => {
  return Profile.find()
}

const getUser = (id) => {
  return Profile.findById(id)
}

const deleteById = (id) => {
  return Profile.findOneAndDelete({ _id: id })
}

const getByEmail = (email) => {
  return Profile.findOne({ email })
}

const updateById = (id, query) => {
  return Profile.findByIdAndUpdate(id, query, { new: true })
}

const saveUser = (data) => {
  const user = new Profile(data)
  user.save((err, result) => {
    if (err) throw err
    console.log(result)
  })
}

const { Message } = require('../models/message.model')

const saveMessage = (data) => {
  const message = new Message(data)
  message.save((err, result) => {
    if (err) throw err
    console.log(result)
  })
}

const getAllMessage = () => {
  return Message.find()
}

const getMessageBySender = async (sender, reciver) => {
    const data = await Message.find({sender})
    console.log(data)
    console.log('reciver',reciver)
    return data.filter(msg => msg.reciver === reciver)
    
}

module.exports = {
  getMessageBySender,
  getAllMessage,
  saveMessage,
  getData,
  getUser,
  deleteById,
  getByEmail,
  updateById,
  saveUser,
}
