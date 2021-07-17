/* eslint-disable no-undef */
const moment = require('moment')
const time = moment().format('hh:mm A')

const { Chat } = require('../models/chat.model')

// const addData = (req, res ) => {
  // const datas = new Chat({
  //   img:'images/Dani.jpg',
  //   username:'Dani Maulana',
  //   message: 'Hello world!',
  //   timeSend:time
  // })
  // datas.save((err, data)=>{
  //   if(err) console.error(err)
  //   console.log(data)
  // })
// }

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