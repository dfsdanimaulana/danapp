const express = require('express')
const expressLayouts = require('express-ejs-layouts')
require('dotenv').config()

const app = express()
const port = process.env.PORT


// view engine
app.set('view engine', 'ejs')

// layouts
app.use(expressLayouts)
// set the default layout
app.set('layout', './layouts/main')

//access public folder
app.use('/', express.static('public'))
// app.use('./css', express.static(__dirname + 'public/css'))
// app.use('./js', express.static(__dirname + 'public/js'))
// app.use('./images', express.static(__dirname + 'public/images'))


app.get('/old', (req,res)=>{
    res.redirect(301,'/new')
    
})
app.get('/new', (req,res)=>{
    res.send('<h1>Redirected!</h1>') // determine the content type automatically
    
})

// router
require('./routes')(app)


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

app.listen(port, (err)=> {
    if(err){
        console.log('there is a problem ',err)
        return
    }
    console.log(`App listening on http://localhost/${port}`)
})