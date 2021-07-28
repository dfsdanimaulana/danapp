const modalContainer = document.querySelector('.modal-container')
const modal = document.querySelector('.modal')
console.log(modal.style.display)

const openModal = document.querySelectorAll('.bi.bi-pencil-square')
const closeModal = document.querySelector('.close')

for (let i = 0; i < openModal.length; i++) {
  openModal[i].onclick = () => {
    modalContainer.style.display = 'grid'
    modal.style.display = 'block'
    console.log(modal.style.display)
  }
}

closeModal.onclick = () => {
  modalContainer.style.display = 'none'
}
