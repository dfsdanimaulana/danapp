'use strict'

const { getData } = require('../utils/db.method')

const view = async (req, res) => {
  const data = await getData()
  const params = {
    layout: 'layouts/main',
    title: 'Chat page',
    style: 'chat',
    script: 'chat',
    currentUser: req.session.user._id,
    data,
  }
  res.render('chat', params)
}

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err
    return res.redirect('/login')
  })
}
module.exports = {
  view,
  logout,
}
