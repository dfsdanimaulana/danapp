exports.view = (req, res) => {
    const chatModel = require('../models/chat.model')
    chatModel.findAll().then(arr => {
        const data = arr // array of object

        const params = {
            title: 'page not found',
            style: 'chat',
            script: 'chat',
            data
        }
        res.render('chat', params)
    }).catch(err => console.log(err))
        
}