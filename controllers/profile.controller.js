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

const addData = (req,res) =>{
    const data = req.body
    if (data.password !== data.password_check) {
        res.redirect('/signup',{msg:'Wrong check password!'})
    }
    
    const profile = new Profile({
        username: data.username,
        name: data.name,
        email: data.email,
        password: data.password
    })
    profile.save((err,list)=>{
        if(err) console.error(err)
        console.log(list)
        res.redirect('/contacts')
    })
}

module.exports = {
    view,
    addData
}