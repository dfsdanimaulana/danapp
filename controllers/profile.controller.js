/* eslint-disable no-undef */
'use strict'

const { getUser } = require('../utils/db.method')

const params = {
  layout: 'layouts/html',
  title: 'Profile Page',
  style: 'profile',
  script: 'profile',
}
const view = async (req, res) => {
  const id = req.params.id
  const data = await getUser(id)
  if (!data) {
    return res.redirect('/')
  }
  params.data = data
  res.render('profile', params)
}

module.exports = {
  view,
}
