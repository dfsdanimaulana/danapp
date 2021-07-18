/* eslint-disable no-undef */
const { Profile } = require('../models/profile.model')

const view = (req, res) => {
  const id = req.params.id
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
    console.log(err)
    res.send(err)
  })
  
}

const addData = (req,res) =>{
    const data = req.body
    if (data.password !== data.password_check) {
        res.redirect(301,'/signup',{msg:'Wrong check password!'})
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
        res.redirect(301, '/contacts')
    })
}

module.exports = {
    view,
    addData
}