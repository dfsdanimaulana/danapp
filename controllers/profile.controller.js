/* eslint-disable no-undef */
'use strict'

const { getUser } = require('../core/utils/db.method')

const params = {
  layout: 'layouts/html',
  title: 'Profile Page',
  style: 'profile',
  script: 'page',
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
