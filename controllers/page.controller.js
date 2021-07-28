'use strict'
const { getData, deleteById } = require('../utils/db.method')

const params = {
  layout: 'layouts/html',
  title: 'All data in DataBase',
  style: 'page',
  script: 'page',
}

const showData = async (req, res) => {
  const data = await getData()
  params.data = data
  res.render('page', params)
}

const deleteData = async (req, res) => {
  const id = req.body.id
  deleteById(id)
  res.redirect('/page')
}

module.exports = {
  showData,
  deleteData,
}
