'use strict'

const session = require('express-session')

// use session
module.exports = (app) => {
    app.use(
        session({
            secret: 'key that will sign cookie in the browser',
            resave: false,
            saveUninitialized: false,
            cookie: {
                // secure : true, -> enable in https
                httpOnly: true // only send through server and browser

            }
        })
    )
}