/* eslint-disable no-undef */
'use strict'

const { getUser, updateById } = require('../utils/db.method')

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
  params.currentUser = req.session.user._id
  res.render('profile', params)
}

const updateData = async (req, res) => {
  const data = req.body
  const query = {
    $set: {
      target: data.dataValue,
    }
  }
  await updateById(data.id,query).then(result=> res.send(result)).catch(err => res.send(err))

}
module.exports = {
  view,updateData
}
