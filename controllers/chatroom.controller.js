'use strict'

const { getUser, getAllMessage } = require('../utils/db.method')

const params = {}

const view = async (req, res) => {
  const id = req.params.id
  const data = await getUser(id)
  if (!data) {
    return res.redirect('/')
  }
  params.currentUser = req.session.user.username
  params.data = data
  res.render('chatroom', params)
}

const showMessage = async (req, res) => {
  try {
    const data = await getAllMessage()
    if (!data) {
      return res.send('data not found')
    }
    res.json(data)
  } catch (e) {
    res.send(e)
  }
}
module.exports = {
  view,
  showMessage,
}
