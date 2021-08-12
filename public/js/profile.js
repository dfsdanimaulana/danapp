'use strict'

// nav menu start
const navmenu = document.querySelector('.nav-menu')
const icon = document.querySelector('.bi.bi-three-dots-vertical')

icon.addEventListener('click', ()=> {
    navmenu.classList.add('open')
})

// add two or more event listener in a single element
const evenListener = ['click', 'scroll']

evenListener.forEach((ev) => {
    // outside click detect
    document.addEventListener(ev, (out) => {
        let clickedElement = out.target
        do {
            if (clickedElement == navmenu) {
                // this is inside click. do nothing just return
                return
            }
            if (clickedElement == icon) {
                // this is inside click. do nothing just return
                return
            }
            clickedElement = clickedElement.parentNode
        } while (clickedElement)
            navmenu.classList.remove('open')
    })
})
// nav menu end


// modal start
const modalContainer = document.querySelector('.modal-container')
const modal = document.querySelector('.modal')

const openModal = document.querySelectorAll('.bi.bi-pencil-square')
const closeModal = document.querySelector('.close')
const header = document.querySelector('.modal-header h3')
const input = document.querySelector('.modal-input')
const updater = document.querySelector('.updater')


openModal.forEach(open => {
    open.addEventListener('click',
        ()=> {
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

// modal end
// hide edit button if not currentUser
const currentUser = document.querySelector('#current_user').value
const thisUser = document.querySelector('#this_user').value
if (currentUser !== thisUser) {
    openModal.forEach(el => {
        el.style.visibility = 'hidden'
    })
}