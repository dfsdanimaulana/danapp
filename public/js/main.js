const btn = document.querySelector('.plus')
const menu = document.querySelectorAll('.btn-list')

const nav_btn_icon = document.querySelector('.nav-btn-icon')
const nav_btn = document.querySelector('.nav-btn')

btn.addEventListener('click', () => {
  menu.forEach((v) => v.classList.toggle('open'))
  nav_btn.classList.remove('nav-open')
})

nav_btn_icon.addEventListener('click', () => {
  nav_btn.classList.toggle('nav-open')
  menu.forEach((v) => v.classList.remove('open'))
})

// add two or more event listener in a single element
const evenListener = ['click', 'scroll']

evenListener.forEach((ev) => {
  // outside click detect
  document.addEventListener(ev, (out) => {
    let clickedElement = out.target
    do {
      if (clickedElement == nav_btn) {
        // this is inside click. do nothing just return
        return
      }
      if (clickedElement == btn) {
        return
      }
      for (let i = 0; i < menu.length; i++) {
        if (clickedElement == menu[i]) {
            return
        }
      }
      clickedElement = clickedElement.parentNode
    } while (clickedElement)
    nav_btn.classList.remove('nav-open')
    menu.forEach((v) => v.classList.remove('open'))
  })
})

// sticky header
// on scroll page
window.onscroll = () => stickyTop()

const mainHeader = document.querySelector('.main-header')
// get the offset position of the navbar
const sticky = mainHeader.offsetTop
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyTop() {
  if(window.pageXOffset >= sticky){
    mainHeader.classList.add('sticky')
  }else {
    mainHeader.classList.remove('sticky')
  }
}
const navHeader = document.querySelector('.grid-container')
const headerHeight = navHeader.offsetHeight.toString()
document.querySelector('#chats').style.marginTop = headerHeight+'px'
document.querySelector('#status').style.marginTop = headerHeight+'px'
