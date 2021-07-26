const btn = document.querySelector('.plus')
btn.addEventListener('click', () => {
  const menu = document.querySelector('.btn-container')
  menu.classList.toggle('open')
})
const nav_btn_icon = document.querySelector('.nav-btn-icon')
nav_btn_icon.addEventListener('click', () => {
  const nav_btn = document.querySelector('.nav-btn')
  nav_btn.classList.toggle('nav-open')
})
