const cardName = document.getElementById('cardName');
const cardNumber = document.getElementById('cardNumber');
const cardExpDateMonth = document.getElementById('cardDateMonth');
const cardExpDateYear = document.getElementById('cardDateYear');
const cardCVC = document.getElementById('cardCVC');

const cardNameUpdate = document.getElementById('card-name');
const cardNumUpdate = document.getElementById('card-number');
const expDateMonthUpdate = document.getElementById('card-date-month');
const expDateYearUpdate = document.getElementById('card-date-year');
const updateCvcUpdate = document.getElementById('card-cvc');


cardName.addEventListener('keydown', (event) => {
    
    const keyCode = event.keyCode || event.which;
    
    if (keyCode >= 48 && keyCode <= 57) {
        event.preventDefault();
    }
});

cardNumber.addEventListener('keydown', (event) => {
    
    const keyCode = event.keyCode || event.which;
    
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 8 && keyCode !== 9 && keyCode !== 37 && keyCode !== 39) {
        event.preventDefault();
    }
});

cardExpDateMonth.addEventListener('keydown', (event) => {
    
    const keyCode = event.keyCode || event.which;
    
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 8 && keyCode !== 9 && keyCode !== 37 && keyCode !== 39) {
        event.preventDefault();
    }
});

cardExpDateYear.addEventListener('keydown', (event) => {
    
    const keyCode = event.keyCode || event.which;
    
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 8 && keyCode !== 9 && keyCode !== 37 && keyCode !== 39) {
        event.preventDefault();
    }
});

cardCVC.addEventListener('keydown', (event) => {
    
    const keyCode = event.keyCode || event.which;
    
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 8 && keyCode !== 9 && keyCode !== 37 && keyCode !== 39) {
        event.preventDefault();
    }
});





cardNumber.addEventListener('input', () => {
    
    let str = '0000 0000 0000 0000'
    let inputedByUser = str.substr(0, 0) + cardNumber.value + str.substr(cardNumber.value.length);
    cardNumUpdate.innerHTML = inputedByUser
    
    let start1 = inputedByUser.substr(0, 1)
    if (start1 === '1') {
        let str = '0000 00000 000000'
        let inputedByUser = str.substr(0, 0) + cardNumber.value + str.substr(cardNumber.value.length);

        cardNumUpdate.innerHTML = inputedByUser
    }
})

cardName.addEventListener('input', () => {
    
    let str = ''

    let inputedByUser = str.substr(0, 0) + cardName.value.toUpperCase() + str.substr(cardName.value.length);

    cardNameUpdate.innerHTML = inputedByUser

    cardNameUpdate.innerHTML = inputedByUser === '' ? 'DAVID AFONSO' : inputedByUser;
})

cardExpDateMonth.addEventListener('input', () => {
    
    let str = '00'

    let inputedByUser = str.substr(cardExpDateMonth.value.length) + cardExpDateMonth.value;

    expDateMonthUpdate.innerHTML = inputedByUser
})

cardExpDateYear.addEventListener('input', () => {

    let str = '00'
    
    let inputedByUser = str.substr(cardExpDateYear.value.length) + cardExpDateYear.value;
    
    expDateYearUpdate.innerHTML = inputedByUser
})

cardCVC.addEventListener('input', () => {

    let str = '000'

    let inputedByUser = str.substr(cardCVC.value.length) + cardCVC.value;

    updateCvcUpdate.innerHTML = inputedByUser
})