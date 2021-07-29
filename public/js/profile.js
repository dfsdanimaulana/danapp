const modalContainer = document.querySelector('.modal-container')
const modal = document.querySelector('.modal')

const openModal = document.querySelectorAll('.bi.bi-pencil-square')
const closeModal = document.querySelector('.close')
const header = document.querySelector('.modal-header h3')
const input = document.querySelector('.modal-input')
const updater = document.querySelector('.updater')


openModal.forEach(open => {
  open.addEventListener('click', ()=>{
     modalContainer.style.display = 'grid'
     modal.style.display = 'block'
     header.innerHTML = `Set ${open.dataset.headername}`
     input.value = open.dataset.value
     updater.value = open.dataset.headername
  })
})

closeModal.onclick = () => {
  modalContainer.style.display = 'none'
}

 modalContainer.addEventListener('click', (out) => {
   let clickedElement = out.target
   do {
     if (clickedElement == modal) {
       // this is inside click. do nothing just return
       return
     }
     clickedElement = clickedElement.parentNode
   } while (clickedElement)
   modalContainer.style.display = 'none'
 })