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
const math_operators = ['+', '-', '*', '/'];

const final_operations = []
const final_result = ['']

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
        final_operations.splice(0, final_operations.length)
        return
    }
    else if (button_value === 'DEL') {
        return del_value()
    }
    else if (button_value === '.') {
        return input_dot(button_value)
    }
    else if (math_operators.includes(button_value)) {
        if (display.innerHTML === '0' || forbiddenChars.some(char => display.innerHTML.endsWith(char))) {
            return
        }
        return add_operations(button_value)
    }
    else if (button_value === '=') {
        if (display.innerHTML === '0' || forbiddenChars.some(char => display.innerHTML.endsWith(char))) {
            return
        }
        return evaluate_operation()
    }

    if (display.innerHTML === '0') {
        display.innerHTML = ''
    } 
    else if (display.innerHTML === final_result[0]) {
        display.innerHTML = ''
        final_result[0] = ''
    }

    display.innerHTML += button_value
}

function add_operations(button_value) {
    let value_operation = ''
    display.innerHTML += button_value
    value_operation += display.innerHTML
    final_operations.push(value_operation)
    if (final_operations.length > 1){
        final_operations.shift()
    }
    console.log(final_operations)
    return  value_operation
}

function evaluate_operation() {
    let value_operation = ''
    value_operation += display.innerHTML
    final_operations.push(value_operation)
    if (final_operations.length > 1){
        final_operations.shift()
    }

    result = eval(final_operations[0])
    display.innerHTML = result.toString()

    final_operations.splice(0, final_operations.length)
    final_result[0] = result.toString()
    
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
