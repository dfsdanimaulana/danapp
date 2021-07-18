const express = require('express')
const methodOverride = require('method-override')
const expressLayouts = require('express-ejs-layouts')
require('dotenv').config()

const app = express()
const port = process.env.PORT

// database connection
const database = require('./core/db.connect')
database.db.on('error', console.error.bind(console, 'connection error:'))
database.db.once('open', function () {
  console.log('Database Connected!')
})

// built-in middleware yg di gunakan untuk memparsing data yg dikirm melalui url
app.use(express.urlencoded({ extended: true }))

// method-override
app.use(methodOverride('_method'))

// view engine
app.set('view engine', 'ejs')

// layouts
app.use(expressLayouts)

//access public folder
app.use('/', express.static('public'))

app.get('/old', (req, res) => {
  res.redirect(301, '/new')
})
app.get('/new', (req, res) => {
  res.send('<h1>Redirected!</h1>') // determine the content type automatically
})

// router
require('./routes')(app)

// error page
app.get('/404', (req, res) => {
  const params = {
    layout: 'layouts/html',
    title: 'page not found',
    style: '404',
    script: '404',
  }
  res.status(404)
  res.render('error/404', params)
})

app.use('/', (req, res) => {
  res.redirect(301, '/404')
})

app.listen(port, (err) => {
  if (err) {
    console.log('there is a problem ', err)
    return
  }
  console.log(`App listening on http://localhost/${port}`)
})
