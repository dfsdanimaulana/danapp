'use strict'

const floatingMenu = document.querySelector('#floating-nav-menu')
const btnNav = document.querySelector('#button-nav-toggler')

btnNav.addEventListener('click', ()=> {
    floatingMenu.classList.toggle('d-none')
})

const evenListener = ['click', 'scroll']

evenListener.forEach((ev) => {
    // outside click detect
    document.addEventListener(ev, (out) => {
        let clickedElement = out.target
        do {
            if (clickedElement == floatingMenu) {
                // this is inside click. do nothing just return
                return
            }
            if (clickedElement == btnNav) {
                // this is inside click. do nothing just return
                return
            }
            clickedElement = clickedElement.parentNode
        } while (clickedElement)
            // outside clicked
        floatingMenu.classList.add('d-none')
    })
})
/*
$(function () {
    const menu = $('#floating-nav-menu')
    const btn = $('#button-nav-toggler')

    btn.click(()=> menu.toggleClass('d-none'))

    const events = ['click', 'scroll']

    events.forEach((e)=> {
        document.e(()=> {
            let clickedElement = out.target

            do {
                clickedElement == menu && return
                clickedElement == btn && return
            } while (clickedElement)

                menu.addClass('d-none')
        })
    })
})
*/