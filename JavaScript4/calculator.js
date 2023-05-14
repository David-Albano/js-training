const btn_0 = document.getElementById('0')
const btn_1 = document.getElementById('1')
const btn_2 = document.getElementById('2')
const btn_3 = document.getElementById('3')
const btn_4 = document.getElementById('4')
const btn_5 = document.getElementById('5')
const btn_6 = document.getElementById('6')
const btn_7 = document.getElementById('7')
const btn_8 = document.getElementById('8')
const btn_9 = document.getElementById('9')

const btn_sum = document.getElementById('sum')
const btn_sus = document.getElementById('sus')
const btn_multiplication = document.getElementById('multiplication')
const btn_division = document.getElementById('division')

const btn_dot = document.getElementById('dot')
const btn_del = document.getElementById('del')
const btn_reset = document.getElementById('reset')
const btn_equal = document.getElementById('equal')

const display = document.getElementById('display')


const all_buttons = [
    btn_0, btn_1, btn_2, btn_3, btn_4, btn_5, btn_6,
    btn_7, btn_8, btn_9, btn_sum, btn_sus, btn_multiplication, 
    btn_division, btn_del, btn_reset, btn_equal, btn_dot
]

all_buttons.forEach((clicked_button, index) => {
    clicked_button.addEventListener('click', () => {
        make_operation(index)
    })
})

function make_operation(index) {
    clicked_button = all_buttons[index]
    button_value = clicked_button.querySelector('span')
    button_value = button_value.innerHTML
    // console.log(button_value)

    if (display.innerHTML === '0') {
        display.innerHTML = ''
    }

    display.innerHTML += button_value
}

function sum(args) {
    return
}

function sus(args) {
    return
}

function multiplication(args) {
    return
}

function division(args) {
    return
}

function del(args) {
    return
}

function reset(args) {
    return
}