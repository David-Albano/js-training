
const columnas = document.querySelectorAll('.columna')


let columnaActiva = 0

columnas.forEach((columna, indice) => {
    console.log(columna.classList, '\n---')
    console.log(indice, '\n---')

    columna.addEventListener("mouseover", function() {
        cambiarColumna(indice)
    })

    columna.addEventListener('mouseout', function() {
        mantenerColumna()
    })

    columna.addEventListener('click', function() {
        desactivarColumnas()
    })



})

function cambiarColumna(indice) {

    columnas[columnaActiva].classList.remove('activa')
    columnas[indice].classList.add('activa')

    columnaActiva  = indice
}

function mantenerColumna() {
    return
}

function desactivarColumnas() {
    columnas.forEach((columna, indice) => {
        columna.classList.remove('activa')
        columna.classList.add('desactivada')
    })
}