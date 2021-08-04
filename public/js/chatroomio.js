'use strict'

const socket = io()

const form = document.getElementById('form')
const input = document.getElementById('inp')
const chatRoomBody = document.querySelector('.chat-room-body')

const username = getName()

document.querySelector(
  '.information p'
).innerHTML = `${username} welcome to chat`

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

    // get form data
    const data = {
      username: document.querySelector('#form input:first-child').value,
      sender: document.querySelector('#form input:nth-child(2)').value,
      message: document.querySelector('#form input:nth-child(3)').value,
    }

    // Emit message to server
    socket.emit('message', {
      msg,
      name: username,
      data,
    })

    // Clear input
    input.value = ''
  }
})

// Methods

function outputMsg(msg) {
  if (msg.name !== username) {
    msg.pos = 'left'
  } else {
    msg.name = 'you'
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

// dom area

const navbtn = document.querySelector('.bi.bi-three-dots-vertical')
const navMenu = document.querySelector('.nav-menu')

navbtn.addEventListener('click', () => {
  navMenu.classList.toggle('open')
})

// add two or more event listener in a single element
const evenListener = ['click', 'scroll']

evenListener.forEach((ev) => {
  // outside click detect
  document.addEventListener(ev, (out) => {
    let clickedElement = out.target
    do {
      if (clickedElement == navMenu) {
        // this is inside click. do nothing just return
        return
      }
      if (clickedElement == navbtn) {
        // this is inside click. do nothing just return
        return
      }
      clickedElement = clickedElement.parentNode
    } while (clickedElement)
    navMenu.classList.remove('open')
  })
})
