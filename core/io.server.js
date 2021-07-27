'use strict'

const socketio = require('socket.io')

// const {} = require('./utils/message.method')
const { getCurrentUser, userJoin, formatName } = require('../utils/user.method')

module.exports = (server) => {
  const io = socketio(server)
  io.on('connection', (socket) => {
    // io.emit untuk ke seluruh server
    socket.on('join', (name) => {
      userJoin(name, socket.id)
      socket.broadcast.emit('join', { name, status: 'join' })
    })

    // menerima data dari client
    socket.on('message', (obj) => {
      // mengirim kembali data ke server
      io.emit('message', formatName(obj))
    })
    socket.on('disconnect', () => {
      const user = getCurrentUser(socket.id)
      if (user) {
        socket.broadcast.emit('join', {
          name: user.name,
          status: 'left',
        })
      }
    })
  })
}
