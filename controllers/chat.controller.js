/* eslint-disable no-undef */
'use strict'

const moment = require('moment')

const { Profile } = require('../models/profile.model')

const view = (req, res) => {
    
    Profile.find((err, data)=>{
        
        if (err) return console.error(err)
        
        const params = {
            layout: 'layouts/main',
            title: 'page not found',
            style: 'chat',
            script: 'chat',
            data,
        }
        
        res.render('chat', params)
    })
}

module.exports = {
    view
}
