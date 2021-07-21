const socket = io()

const form = document.getElementById('form')
const input = document.getElementById('input')
const chatRoomBody = document.querySelector('.chat-room-body')




socket.emit('join')

// menerima data dari server
socket.on('message',(msg)=>{
    outputMsg(msg)
})

form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (input.value) {
        
      // kirim data ke server
      socket.emit('message', input.value)
      input.value = ''
    }
 })
  
// membuat msg selalu fokus di bawah
//  window.scrollTo(0, document.body.scrollHeight)
  
function outputMsg(msg) {
    chatRoomBody.innerHTML += 
    `<div class="msg msg-left">${msg}</div>`
}