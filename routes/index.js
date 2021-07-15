module.exports = (app) => {
  require('./page.route')(app)
  require('./chat.route')(app)
  require('./signup.route')(app)
}
