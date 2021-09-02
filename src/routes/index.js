'use strict'

const routes = [
    'chatroom',
    'page',
    'chat',
    'signup',
    'profile',
    'contacts',
    'login',
]

module.exports = (app) => {
    routes.map((route) => require(`./${route}.route`)(app))
}
