'use strict'

require('dotenv').config()
const bcrypt = require('bcryptjs')
// const { createAccessToken, authenticationToken } = require('../core/middleware')
const { getByEmail } = require('../utils/db.method')

const params = {
  layout: 'layouts/html',
  title: 'login Page',
  style: 'login',
  script: 'login',
}

const view = (req, res) => {
  if (req.session.isAuth) {
    return res.redirect('/chat')
  }
  params.email_error = req.flash && req.flash('email_error')
  params.password_error = req.flash && req.flash('password_error')

  res.render('login', params)
}

const cekUser = async (req, res) => {
  const { email, password, checkbox } = req.body
  const { guest } = req.body
  if (guest) {
  const user = await getByEmail('a@g.com')
  req.session.isAuth = true
  req.session.user = user

  return res.redirect('/chat')
  }
  const user = await getByEmail(email)
  if (!user) {
    req.flash('email_error', 'Email not found, please register first')
    return res.redirect('/login')
  }

  try {
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
    req.flash('password_error', 'Incorrect password')
      return res.redirect('/login')
    }

    req.session.isAuth = true

    if (checkbox) {
      const salt = await bcrypt.genSalt()
      const hashedCookie = await bcrypt.hash(user.username, salt)
      res.cookie('id', user._id, {
        expires: new Date(Date.now + 150000),
      })
      res.cookie('login', hashedCookie, {
        expires: new Date(Date.now + 150000),
      })
    }
    req.session.user = user
    return res.redirect('/chat')
  } catch (err) {
    console.log('jwt error', err)
    return res.status(500).send()
  }
}

module.exports = { view, cekUser }

// const userJson = async (req, res) => {
//   try {
//     const { email, password } = req.body

//     const accessToken = await createAccessToken({ email })
//     console.log('token : ', accessToken)

//     req.session.isAuth = true

//     res.json({ accessToken })
//   } catch (err) {
//     return console.log(err)
//   }
// }
// Authentication User & get access token
// const accessToken = await createAccessToken({ email })
// console.log(accessToken)
