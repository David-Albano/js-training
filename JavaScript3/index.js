const allInputs = document.querySelectorAll('.input-box')

allInputs.forEach((input, index) => {
    input.addEventListener("click", updateCardInfo(index))
})


function UpdatecardNumber(cardNumber){
    cardNumber.innerHTML = 'testing'
}


function UpdatecardName(cardName){
    cardName.innerHTML = 'testing'
}   


function UpdatecardDate(cardDate){
    cardDate.innerHTML = 'testing'
}


function UpdatecardCVC(cardCVC){
    cardCVC.innerHTML = 'testing'
}

function updateCardInfo(index) {
    const cardNumber = allInputs[index].classList.contains('cardNumber')
    const cardName = allInputs[index].classList.contains('cardName')
    const cardDate = allInputs[index].classList.contains('cardDate')
    const cardCVC = allInputs[index].classList.contains('cardCVC')


    if(cardNumber){
        UpdatecardNumber(cardNumber)
    }else if(cardName){
        UpdatecardName(cardName)
    }else if(cardDate){
        UpdatecardName(cardDate)
    }else if(cardCVC){
        UpdatecardCVC(cardCVC)
    }

}