module.exports = (socket, io) => {
    console.log('a user connected')
    
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg)
    })
    
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
}