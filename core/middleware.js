'use strict'

require('dotenv').config()
const jwt = require('jsonwebtoken')
const joi = require('joi')
const bcrypt = require('bcryptjs')
const { getUser } = require('./utils/db.method')

const isAuth = (req, res, next) => {
  if (req.session.isAuth && req.session.user) {
    next()
  } else {
    return res.redirect('/login')
  }
}

const hasCookie = async (req, res, next) => {
  
  const cookie = req.cookies
  if (cookie.id && cookie.login) {
    try {
      const name = await getUser(cookie.id)
      const cekCookie = await bcrypt.compare(name.username, cookie.login)
      if (cekCookie) {
        req.session.isAuth = true
        req.session.user = name
      }
    } catch (e) {
      console.log(e)
    }
  }
  next()
}

const createAccessToken = (obj) => {
  return jwt.sign(obj, process.env.ACCESS_TOKEN_SECRET)
}

const authenticationToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  console.log(authHeader)
  const token = authHeader && authHeader.split(' ')[1] // Bearer TOKEN

  if (!token) {
    console.log('Token not found')
    return res.status(401).send()
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log('Token is expired or you dont have access')
      return res.status(401).send()
    }
    req.user = user
    next()
  })
}

module.exports = { isAuth, createAccessToken, authenticationToken, hasCookie }
