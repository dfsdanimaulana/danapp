'use strict'
const { Profile } = require('../models/profile.model')

const view = (req, res) => {
  const params = {
    layout: 'layouts/html',
    title: 'login Page',
    style: 'login',
    script: 'login',
    status: '',
  }
  res.render('login', params)
}

const cekUser = (req, res)=> {
  const { email, password } = req.body

  Profile.findOne({ email })
    .then((user) => {
      if (user.password === password) {
        res.redirect(301, '/chat')
      } else {
        res.render('login', {
          layout: 'layouts/html',
          title: 'login Page',
          style: 'login',
          script: 'login',
          status: 'Wrong password!',
        })
      }
    })
    .catch((err) =>
      res.render('login', {
        layout: 'layouts/html',
        title: 'login Page',
        style: 'login',
        script: 'login',
        status: 'User not found',
      })
    )
}

module.exports = { view, cekUser}