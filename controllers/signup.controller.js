'use strict'

const { Profile } = require('../models/profile.model')
const bcrypt = require('bcryptjs')
const schema = require('../core/utils/userAuth')
const view = (req, res) => {
  const params = {
    layout: 'layouts/html',
    title: 'Signup Page',
    style: 'signup',
    script: 'page',
    status:''
  }
  if(req.session.isAuth){
    return res.redirect('/chat')
  }
  res.render('signup', params)
}

const addUser = async (req, res) => {
  const { error, value } = await schema.validate(req.body)
  if (error) {
      console.log(error)
      return res.redirect('/signup')
  }
  const data = value
  
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
  } catch (e) {
      return res.send(e)
  }
  
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
}

module.exports = {
  view,
  addUser,
}
