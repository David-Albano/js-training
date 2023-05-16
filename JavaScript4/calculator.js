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

const forbiddenChars = ['+', '-', '*', '/', '.'];

all_buttons.forEach((clicked_button, index) => {
    clicked_button.addEventListener('click', () => {
        make_operation(index)
    })
})

function make_operation(index) {
    clicked_button = all_buttons[index]
    button_value = clicked_button.querySelector('span')
    button_value = button_value.innerHTML

    if (button_value === 'RESET') {
        display.innerHTML = '0'
        return
    }
    else if (button_value === 'DEL') {
        return del_value()
    }
    else if (button_value === '.') {
        return input_dot(button_value)
    }
    else if (button_value === '+') {
        if (display.innerHTML === '0' || forbiddenChars.some(char => display.innerHTML.endsWith(char))) {
            return
        }
        return sum(button_value)
    }
    else if (button_value === '-') {
        if (display.innerHTML === '0' || forbiddenChars.some(char => display.innerHTML.endsWith(char))) {
            return
        }
        return sus(button_value)
    }
    else if (button_value === '*') {
        if (display.innerHTML === '0' || forbiddenChars.some(char => display.innerHTML.endsWith(char))) {
            return
        }
        return multiplication(button_value)
    }
    else if (button_value === '/') {
        if (display.innerHTML === '0' || forbiddenChars.some(char => display.innerHTML.endsWith(char))) {
            return
        }
        return division(button_value)
    }
    // else if (button_value === '=') {
    //     return input_dot(button_value)
    // }

    if (display.innerHTML === '0') {
        display.innerHTML = ''
    }

    display.innerHTML += button_value
}

function sum(button_value) {
    let value_operation = ''
    display.innerHTML += button_value
    value_operation += display.innerHTML
    return  value_operation
}

function sus(button_value) {
    let value_operation = ''
    display.innerHTML += button_value
    value_operation += display.innerHTML
    console.log(value_operation)
    return
}

function multiplication(button_value) {
    let value_operation = ''
    display.innerHTML += button_value
    value_operation += display.innerHTML
    console.log(value_operation)
    return
}

function division(button_value) {
    let value_operation = ''
    display.innerHTML += button_value
    value_operation += display.innerHTML
    console.log(value_operation)
    return
}

function input_dot(button_value,) {

    let value_split = display.innerHTML.split('') 

    if (value_split.includes(button_value) || forbiddenChars.some(char => display.innerHTML.endsWith(char))) {
        return;
    }

    display.innerHTML += button_value
}

function del_value() {
    if (display.innerHTML === '0') {
        return
    }
    
    let value_split = display.innerHTML.split('')
    value_deleted = value_split.slice(0 , -1)
    display.innerHTML = value_deleted.join('')

    if (display.innerHTML.length == 0) {
        display.innerHTML = '0'
    }

    return
}
