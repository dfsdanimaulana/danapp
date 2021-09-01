'use strict'

// nav menu start
const navmenu = document.querySelector('.nav-menu')
const icon = document.querySelector('.bi.bi-three-dots-vertical')

icon.addEventListener('click', () => {
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

openModal.forEach((open) => {
    open.addEventListener('click', () => {
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
    openModal.forEach((el) => {
        el.style.visibility = 'hidden'
    })
}

// modal profile start

const profile_edit = document.querySelector('.img-container a i')

const modal_img_container = document.querySelector('.modal-img-container')
const modal_img = document.querySelector('.modal-img')
const modal_img_i = document.querySelector('.modal-img i')
const modal_img_form = document.querySelector('.modal-img form')

profile_edit.addEventListener('click', () => {
    modal_img_container.style.display = 'block'
})

modal_img_i.addEventListener('click', () => {
    modal_img_container.style.display = 'none'
})

modal_img_container.addEventListener('click', (out) => {
    let clickedElement = out.target
    do {
        if (clickedElement == modal_img) {
            // this is inside click. do nothing just return
            return
        }
        clickedElement = clickedElement.parentNode
    } while (clickedElement)
    modal_img_container.style.display = 'none'
})

// input image logic

// show selected image before submiting
// get input element

function fileValidation(id) {
    const fileInput = document.getElementById(id)
    const filePath = fileInput.value
    const allowedExt = /(\.jpg|\.jpeg|\.png)$/i

    if (!allowedExt.exec(filePath)) {
        alert('file not valid!')
        fileInput.value = ''
        return false
    } else {
        // image preview
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader()
            reader.onload = (e) => {
                document
                    .querySelector('#profile-img')
                    .setAttribute('src', e.target.result)
            }
            reader.readAsDataURL(fileInput.files[0])
        }
    }
}
