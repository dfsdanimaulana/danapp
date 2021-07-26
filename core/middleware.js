'use strict'

require('dotenv').config()
const jwt = require('jsonwebtoken')
const joi = require('joi')

const isAuth = (req, res, next) => {
  if (req.session.isAuth) {
    next()
  } else {
    return res.redirect('/login')
  }
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

module.exports = { isAuth, createAccessToken, authenticationToken }
