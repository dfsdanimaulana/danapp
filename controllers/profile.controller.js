/* eslint-disable no-undef */
'use strict'

const { Profile } = require('../models/profile.model')

const view = (req, res) => {
  const id = req.params.id
  if(!id) res.redirect('/')
  Profile.findById(id).then(async (list)=>{
        const data = await list
        const params = {
        layout: 'layouts/html',
        title: 'Profile Page',
        style: 'profile',
        script: 'page',
        data
      }
    res.render('profile', params)
  }).catch(err=>{
    if (err) {
        console.log(err)
        res.redirect('/')
      }
  })
  
}

module.exports = {
    view
}