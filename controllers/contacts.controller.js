'use strict'

const { getData } = require("../core/utils/db.method")


const params = {
  layout: 'layouts/html',
  title: 'page Contacts',
  style: 'contacts',
  script: 'chat',
}

const view = async (req, res) => {
  const data = await getData()
  params.data = data
  res.render('contacts', params)
}

module.exports = {
  view,
}
