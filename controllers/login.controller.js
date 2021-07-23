'use strict'
const { Profile } = require('../models/profile.model')
const bcrypt = require('bcryptjs')

const params = {
  layout: 'layouts/html',
  title: 'login Page',
  style: 'login',
  script: 'login',
  status: '',
}

const view = (req, res) => {
  res.render('login', params)
}

const cekUser = async (req, res) => {
  const { email, password } = req.body

  const user = await Profile.findOne({ email })

  if(!user){
    console.log("user not found")
    params.status = 'email not registered, please signup first'
    return res.render('login', params)
  }
  const isMatch = await bcrypt.compare(password, user.password)

  if(!isMatch){
    console.log('incorrect password')
    params.status = 'incorrect password'
    return res.render('login', params)
  }
  
  req.session.isAuth = true
  return res.redirect('/chat')
}

module.exports = { view, cekUser}