'use strict'

const socket = io()

const form = document.getElementById('form')
const input = document.getElementById('inp')
const chatRoomBody = document.querySelector('.chat-room-body')

const username = getName()

document.querySelector('.information p').innerHTML = `${username} welcome to chat`

// user join/leave chat
socket.emit('join', username)
socket.on('join', (obj) => {
  greetMsg(obj)
  chatRoomBody.scrollTop = chatRoomBody.scrollHeight
})

// menerima data dari server
socket.on('message', (msg) => {
  outputMsg(msg)

  // membuat msg selalu fokus di bawah
  chatRoomBody.scrollTop = chatRoomBody.scrollHeight
})

form.addEventListener('submit', function (e) {
  e.preventDefault()

  // Get message text
  let msg = input.value
  // let msg = e.target.elements.inp.value

  if (msg) {
    msg = msg.trim()
    
    // Emit message to server
    socket.emit('message', {
      msg,
      name: username,
    })

    // Clear input
    input.value = ''
    input.fokus()
  }
})

// Methods

function outputMsg(msg) {
    if (msg.name !== username) {
        msg.pos = 'left'
    }
  chatRoomBody.innerHTML += `<div class="msg msg-${msg.pos}">
        <span>${msg.name}</span>
        <p>${msg.content}</p>
        <span>
            <i class="bi bi-check"></i>
        <!--<i class="bi bi-check-all"></i>-->
            ${msg.timeSend}
        </span>
     </div>`
}

function greetMsg(obj) {
  chatRoomBody.innerHTML += `<div class="information">
      <p>${obj.name} ${obj.status} the chat</p>
    </div>`
}

function getName() {
  let url = window.location.href.toString().split('/')
  return url[url.length - 1].replace(/%20/g, ' ')
}
