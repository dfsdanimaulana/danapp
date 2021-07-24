'use strict'

const { Profile } = require('../models/profile.model')

const view = (req, res) => {
  Profile.find(async (err, list) => {
    if (err) return console.error(err)
    const data = await list

    const params = {
      layout: 'layouts/mainio',
      title: 'chat room',
      style: 'chatroom',
      script: 'chatroomio',
      data,
    }

    res.render('chatroom', params)
  })
}
const chatRoom = async (req,res)=>{
    const name = req.params.name
    
      const data = await Profile.findById(name)
      
      const params = {
      layout: 'layouts/mainio',
      title: 'chat room',
      style: 'chatroom',
      script: 'chatroomio',
      data,
    }
      res.render('chatroom', params)
}
module.exports = {
  view, chatRoom
}
