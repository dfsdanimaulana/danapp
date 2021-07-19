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

module.exports = {
    showData
}