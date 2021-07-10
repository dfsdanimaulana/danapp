const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()


// view engine
app.set('view engine', 'ejs')

// layouts
app.use(expressLayouts)
app.set('layout', 'templates/main')

//access public folder
app.use(express.static('public'))

// router
require('./routes/page.route')(app)

app.use('/', (req, res)=> {
    console.log('welcome to my server')
    res.send('welcome to my server')
})

app.listen(3000, ()=> {
    console.log('server running on http://localhost:3000/')
})