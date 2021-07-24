const btn = document.querySelector('.plus')
btn.addEventListener('click', () => {
  const menu = document.querySelector('.btn-container')
  menu.classList.toggle('open')
})
