exports.view = (req, res) => {
    const data = require('../models/chat.model')

    const params = {
        title: 'page not found',
        style: 'chat',
        script: 'chat',
        data
    }
    res.render('chat', params)
}