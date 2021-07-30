'use strict'

const { Profile } = require('../models/profile.model')
const bcrypt = require('bcryptjs')
const schema = require('../utils/userAuth')
const view = (req, res) => {
  const params = {
    layout: 'layouts/html',
    title: 'Signup Page',
    style: 'signup',
    script: 'page',
    status: '',
  }
  if (req.session.isAuth && req.session.user) {
    return res.redirect('/chat')
  }
  res.render('signup', params)
}

const addUser = async (req, res) => {
  const { error, value } = await schema.validate(req.body)
  if (error) {
    console.log(error)
    return res.send(error)
  }
  const data = value
  data.username = data.username.replace(/ /g, '_')
  const user = await Profile.findOne({ email: data.email })

  // cek if user alredy exists

  if (user) {
    req.flash('email_error', 'User already exists')
    return res.redirect('/signup')
  }

  // hash the password
  try {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(data.password, salt)

    const profile = new Profile({
      username: data.username,
      name: data.name,
      email: data.email,
      password: hashedPassword,
    })

    profile.save((err, list) => {
      if (err) return console.error(err)
      console.log(list)
      res.redirect('/contacts')
    })
  } catch (e) {
    return res.send(e)
  }
}

module.exports = {
  view,
  addUser,
}
