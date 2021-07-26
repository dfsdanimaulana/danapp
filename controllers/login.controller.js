'use strict'

require('dotenv').config()
const bcrypt = require('bcryptjs')
// const { createAccessToken, authenticationToken } = require('../core/middleware')
const { getByEmail } = require('../core/utils/db.method')

const params = {
  layout: 'layouts/html',
  title: 'login Page',
  style: 'login',
  script: 'login',
  status: '',
}

const view = (req, res) => {
  if(req.session.isAuth){
    return res.redirect('/chat')
  }
  res.render('login', params)
}

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
const cekUser = async (req, res) => {
  const { email, password } = req.body

  const user = await getByEmail(email)
  if (!user) {
    params.status = 'email not registered, please signup first'
    return res.redirect('/login')
  }

  try {
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      params.status = 'incorrect password'
      return res.redirect('/login')
    }
    // Authentication User & get access token
    // const accessToken = await createAccessToken({ email })
    // console.log(accessToken)
    req.session.isAuth = true
    req.session.user = user
    return res.redirect('/chat')
    
  } catch (err) {
    console.log('jwt error', err)
    return res.status(500).send()
  }
}

module.exports = { view, cekUser}
