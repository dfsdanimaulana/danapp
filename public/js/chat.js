const btn = document.querySelector('.plus')
const menu = document.querySelectorAll('.btn-list')

const nav_btn_icon = document.querySelector('.nav-btn-icon')
const btn_icon = document.querySelector('.bi-list')
const nav_btn = document.querySelector('.nav-btn')

btn.addEventListener('click', () => {
    menu.forEach((v) => v.classList.toggle('open'))
    nav_btn.classList.remove('nav-open')
})

nav_btn_icon.addEventListener('click', () => {
    btn_icon.classList.toggle('rotate')
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