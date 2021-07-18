/* eslint-disable no-undef */
const { Profile } = require('../models/profile.model')

const view = (req, res) => {
  
  Profile.find(async (err,list)=>{
        if(err) console.error(err)
        
        const data = await list[0]
        const params = {
        layout: 'layouts/html',
        title: 'Profile Page',
        style: 'profile',
        script: 'page',
        data
      }
    res.render('profile', params)
      
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
        res.redirect(301, '/chat')
    })
}

module.exports = {
    view,
    addData
}