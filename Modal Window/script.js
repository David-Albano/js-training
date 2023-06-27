'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal')
console.log(btnOpenModal)

function openModal(){
    modal.classList.add('visible')
    overlay.classList.add('visible')
}

function closeModal(){
    modal.classList.remove('visible')
    overlay.classList.remove('visible')
}

for(let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', openModal)

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

// Keyboard event
document.addEventListener('keydown', function(event) {
    if(event.key == "Escape" && modal.classList.contains('visible')) {
        closeModal()
    }
})
