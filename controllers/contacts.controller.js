const { Profile } = require('../models/profile.model')

const view = (req, res) => {
    
    Profile.find(async (err, list)=>{
        
        if (err) return console.error(err)
        const data = await list[0]
        
        const params = {
            layout: 'layouts/html',
            title: 'page not found',
            style: 'contacts',
            script: 'chat',
            data,
        }
        
        res.render('contacts', params)
    })
}

module.exports = {
    view
}