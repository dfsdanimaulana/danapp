const socket = io()

const form = document.getElementById('form')
const input = document.getElementById('input')
const chatRoomBody = document.querySelector('.chat-room-body')

  form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (input.value) {
      socket.emit('chat message', input.value)
      input.value = ''
    }
  })
  
  socket.on('chat message', function(msg) {
    const message = document.createElement('div')
    message.classList.add('msg msg-left')
    message.textContent = msg
    chatRoomBody.appendChild(message)
    
    // membuat msg selalu fokus di bawah
    window.scrollTo(0, document.body.scrollHeight)
  })