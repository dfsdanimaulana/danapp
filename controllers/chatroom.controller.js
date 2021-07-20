'use strict'

const { Profile } = require('../models/profile.model')

const view = (req, res) => {
  Profile.find(async (err, list) => {
    if (err) return console.error(err)
    const data = await list

    const params = {
      layout: 'layouts/main',
      title: 'chat room',
      style: 'chatroom',
      script: 'chatroom',
      data,
    }

    res.render('chatroom', params)
  })
}

module.exports = {
  view,
}
