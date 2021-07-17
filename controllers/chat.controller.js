const moment = require('moment')
const time = moment().format('hh:mm A')

const { Chat } = require('../models/chat.model')

const view = (req, res) => {
    
    Chat.find((err, data)=>{
        
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