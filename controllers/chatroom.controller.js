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
const chatRoom = (req,res)=>{
    const id = req.params.id
    Profile.findById(id).then(async (list)=>{
        const data = await list
        const params = {
            layout: 'layouts/html',
            title: 'Profile Page',
            style: 'profile',
            script: 'page',
            data
        }
      res.render('chatroom', params)
    })
}
module.exports = {
  view, chatRoom
}
