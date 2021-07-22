'use strict'

const socketio = require('socket.io')

const m = require('./utils/message.method')
const u = require('./utils/user.method')

module.exports = (server) => {
    const io = socketio(server)
    io.on('connection', socket => {
    
        // io.emit untuk ke seluruh server
        socket.on('join', (name) => {
            u.userJoin(name, socket.id)
            socket.broadcast.emit('join', {name, status: 'join'})
        })
        
        // menerima data dari client
        socket.on('message', obj => {
            // mengirim kembali data ke server
            io.emit('message', u.formatName(obj))
        })
        socket.on('disconnect', () => {
            const user = u.getCurrentUser(socket.id)
            console.log('this ', user)
            // socket.broadcast.emit('leave', {
            //   name: u.getCurrentUser(socket.id).name,
            //   status: 'left',
            // })
        })
        
    }) 
}

