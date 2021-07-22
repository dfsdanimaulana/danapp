'use strict'

const socket = io()

const form = document.getElementById('form')
const input = document.getElementById('input')
const chatRoomBody = document.querySelector('.chat-room-body')

socket.emit('join', getName())

socket.on('join', name => greetMsg(name) )

// menerima data dari server
socket.on('message',(msg)=>{
    outputMsg(msg)
    
    // membuat msg selalu fokus di bawah
    window.scrollTo(0, document.body.scrollHeight)
      
})

form.addEventListener('submit', function(e) {
  e.preventDefault()
  
  // Get message text
  let msg = input.value
  
  if(msg){
        msg = msg.trim()
        // Emit message to server
        
        socket.emit('message', {
            msg,
            name:getName()
        })
        
        // Clear input
        input.value = ''
        input.fokus()
  }

})
  
function outputMsg(msg) {
    chatRoomBody.innerHTML += 
    `  <div class="msg msg-${msg.pos}">
        <span>${msg.name}</span>
        <p>${msg.content}</p>
        <span>
            <i class="bi bi-check"></i>
        <!--<i class="bi bi-check-all"></i>  -->
            ${msg.timeSend}
        </span>
     </div>`
}

function greetMsg(name) {
    chatRoomBody.innerHTML += ``
}

function getName() {
    let url = window.location.href.toString()
    url = url.split('/')
    let name = url[url.length-1]
    name = name.replace(/%20/g,' ')
    return name
}