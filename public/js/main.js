const btn = document.querySelector('.plus')
const menu = document.querySelector('.btn-container')

const nav_btn_icon = document.querySelector('.nav-btn-icon')
const nav_btn = document.querySelector('.nav-btn')

btn.addEventListener('click', () => {
  menu.classList.toggle('open')
  nav_btn.classList.remove('nav-open')
})

nav_btn_icon.addEventListener('click', () => {
  nav_btn.classList.toggle('nav-open')
  menu.classList.remove('open')
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
      clickedElement = clickedElement.parentNode
    } while (clickedElement)
    nav_btn.classList.remove('nav-open')
    menu.classList.remove('open')
  })
})
