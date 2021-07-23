'use strict'

exports.view = (req, res) => {
  const params = {
    layout: 'layouts/html',
    title: 'login Page',
    style: 'login',
    script: 'login',
  }
  res.render('login', params)
}
