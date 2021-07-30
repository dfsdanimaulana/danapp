/* eslint-disable no-undef */
'use strict'

const { getUser, updateById, getData } = require('../utils/db.method')

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

const updateData = (req, res) => {
  const data = req.body
  params.currentUser = req.session.user._id
  let query

  switch (data.updater) {
    case 'username':
      data.dataValue = data.dataValue.replace(/ /g, '_')
      query = {
        $set: {
          username: data.dataValue,
        },
      }
      break
    case 'name':
      query = {
        $set: {
          name: data.dataValue,
        },
      }
      break
    case 'email':
      query = {
        $set: {
          email: data.dataValue,
        },
      }
      break

    default:
      query = {
        $set: {
          status: data.dataValue,
        },
      }
      break
  }

  updateById(data.id, query)
    .then((result) => {
      params.data = result
      params.currentUser = req.session.user._id
      res.render('profile', params)
    })
    .catch((err) => res.send(err))
}

const getUsers = async (req, res) => {
  try {
    const user = await getData()
    res.json(user)
  } catch (e) {
    res.send(e)
  }
}
module.exports = {
  view,
  updateData,
  getUsers,
}
