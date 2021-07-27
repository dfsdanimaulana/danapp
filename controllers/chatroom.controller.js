'use strict'

const { getUser } = require('../utils/db.method')

const params = {
  layout: 'layouts/mainio',
  title: 'chat room',
  style: 'chatroom',
  script: 'chatroomio',
}

const view = async (req, res) => {
  const id = req.params.id
  const data = await getUser(id)
  if (!data) {
    return res.redirect('/')
  }
  params.data = data
  res.render('chatroom', params)
}

module.exports = {
  view,
}
