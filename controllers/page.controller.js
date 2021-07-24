'use strict'
const { Profile } = require('../models/profile.model')

const showData = (req,res)=>{
    Profile.find()
    .then(data => {
        const params = {
            layout: 'layouts/html',
            title: 'All data in DataBase',
            style: 'page',
            script: 'page',
            data
          }
        res.render('page', params)
    })
    .catch(err => res.send(err))
}

const deleteData = (req, res) => {
    const id = req.body.id
    Profile.findByIdAndDelete({_id:id})
    .catch(err=>console.log(err))
    .then(data=>console.log('Delete sucess...', data))

    return res.redirect('/page')
}

module.exports = {
    showData,
    deleteData
}