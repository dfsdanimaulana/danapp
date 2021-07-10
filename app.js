const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000


// view engine
app.set('view engine', 'ejs')

// layouts

app.use(expressLayouts)
// set the default layout
app.set('layout', './layouts/main')

//access public folder
app.use(express.static('public'))
app.use('./css', express.static(__dirname + 'public/css'))
app.use('./js', express.static(__dirname + 'public/js'))
app.use('./images', express.static(__dirname + 'public/images'))

// router
require('./routes/page.route')(app)
require('./routes/chat.route')(app)
/*
app.get('/', (req, res)=> {
    res.render('chat', {
        title: 'chat', style: 'chat', script: 'script'
    })
})
*/
app.use('/', (req, res)=> {
    const params = {
        layout: "layouts/html",
        title: "page not found",
        style: "404",
        script: "404",
        page: req.url.replace('/', '')
    }
    res.status(404)
    res.render('error/404', params)
})

app.listen(port, ()=> {
    console.log(`App listening on http://localhost/${port}`)
})