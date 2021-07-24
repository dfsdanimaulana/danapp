'use strict'

const { Profile } = require('../models/profile.model')
const bcrypt = require('bcrypt')

const view = (req, res) => {
  const params = {
    layout: 'layouts/html',
    title: 'Signup Page',
    style: 'signup',
    script: 'page',
  }
  res.render('signup', params)
}

const addUser = async (req, res) => {
  const data = req.body

  if (data.password !== data.password_check) {
    console.log('password is not match')
    return res.redirect('/signup')
  }

  const user = await Profile.findOne({ email: data.email })

  // cek if user alredy exists

  if (user) {
    console.log('user is alredy exists')
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
  } catch {
    res.status(500).send()
  }
}

module.exports = {
  view,
  addUser,
}
