'use strict'

const socketio = require('socket.io')

const m = require('./utils/message.method')
const u = require('./utils/user.method')

module.exports = (server) => {
    const io = socketio(server)
    io.on('connection', socket => {
    
        // io.emit untuk ke seluruh server
        socket.on('join', (name) => {
            io.broadcast.emit('join', `${name} join the chat.`)
        })
        // menerima data dari client
        socket.on('message', obj => {
            // mengirim kembali data ke server
            io.emit('message', u.formatName(obj))
        })
        socket.on('disconnect', () => {
            console.log('user disconnected')
        })
        
    })
}

