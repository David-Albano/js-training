// Listening the click of the button

const boton = document.getElementById('boton')
boton.addEventListener('click',  preguntarNombre)

const h1 = document.getElementById('h1')
const h2 = document.getElementById('h2')

// Ask and save the username

function preguntarNombre() {
    const nombre = prompt('Enter your name')
    mostrarNombre(nombre)
}


//Insert el the name in the place of the '...'

function mostrarNombre(nombre) {
    h1.textContent = nombre
    h2.textContent = 'Hello!!'
}