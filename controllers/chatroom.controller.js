'use strict'

const { getUser } = require('../core/utils/db.method')

const params = {
  layout: 'layouts/mainio',
  title: 'chat room',
  style: 'chatroom',
  script: 'chatroomio',
}

const view = async (req, res) => {
  const id = req.params.id
  const data = await getUser(id)
  params.data = data
  res.render('chatroom', params)
}

module.exports = {
  view,
}
