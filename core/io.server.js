module.exports = (socket, io) => {
    // io.emit untuk ke seluruh server

    socket.on('join', () => {
        console.log('user join')
    })
    // menerima data dari client
    socket.on('message', (msg) => {
        // mengirim kembali data ke server
        io.emit('message', msg)
    })
    
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
}