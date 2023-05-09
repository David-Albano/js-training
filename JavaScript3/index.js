const cName = document.getElementById('cardName');
const cNum = document.getElementById('cardNumber');
const expDate = document.getElementById('cardDate');
const cvc = document.getElementById('cardCVC');


const cardNameUpdate = document.getElementById('card-name');
const cardNumUpdate = document.getElementById('card-number');
const expDateUpdate = document.getElementById('card-date');
const updateCvcUpdate = document.getElementById('card-cvc');


cvc.addEventListener('input', () => {

    let str = '000'

    let inputedByUser = str.substr(cvc.value.length)+str.substr(3, 0)+cvc.value;

    updateCvcUpdate.innerHTML = inputedByUser

})

cNum.addEventListener('input', () => {

    let str = '0000 0000 0000 0000'
    let inputedByUser = str.substr(0, 0)+cNum.value+str.substr(cNum.value.length);
    cardNumUpdate.innerHTML = inputedByUser


    let start1 = inputedByUser.substr(0, 1)
    if (start1 === '1') {
        let str = '0000 00000 000000'
        let inputedByUser = str.substr(0, 0)+cNum.value+str.substr(cNum.value.length);

        cardNumUpdate.innerHTML = inputedByUser
    }
})

cName.addEventListener('input', () => {

    let str = ''

    let inputedByUser = str.substr(0, 0)+cName.value+str.substr(cName.value.length);

    cardNameUpdate.innerHTML = inputedByUser

})

expDate.addEventListener('input', () => {

    let str = '00/00'

    let inputedByUser = str.substr(0, 0)+expDate.value+str.substr(expDate.value.length);

    expDateUpdate.innerHTML = inputedByUser  

})