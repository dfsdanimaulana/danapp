'use strict'

module.exports = (app) => {
  require('./page.route')(app)
  require('./chat.route')(app)
  require('./signup.route')(app)
  require('./profile.route')(app)
  require('./contacts.route')(app)
}
