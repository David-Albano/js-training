'use strict';

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e']

// // SLICE
// console.log(arr.slice(2))
// console.log(arr.slice(2, 4))
// console.log(arr.slice(-2))
// console.log(arr.slice(1, -2))
// console.log(arr.slice())
// console.log([...arr])

// // SPLICE  --> Mutate the original array
// // console.log(arr.splice(2))
// arr.splice(-1)
// arr.splice(1, 2)
// console.log(arr)

// // REVERSE --> Mutate the original array
// const arr2 = ['j', 'i', 'h', 'g', 'j']
// console.log(arr2.reverse())
// console.log(arr2)
// console.log(arr2.reverse())
// console.log(arr2)


// // CONCAT
// const letters = arr.concat(arr2)
// console.log(letters)
// console.log([...arr, ...arr2])

// // JOIN
// console.log(letters.join(' - '))
// console.log('~~~~~~~~~~~~~~~~~~')


// // at method
// const arr3 = [23, 11, 64]
// console.log(arr3[0])
// console.log(arr3.at(0))

// // getting last array element
// console.log(arr3[arr3.length - 1])
// console.log(arr3[arr3.length - 1])
// console.log(arr3.slice(-1)[0])
// console.log(arr3.at(-1))

// console.log('David'.at(-1))
// console.log('David'.at(-2))


// forEach Loop

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const movement of movements) {
for(const [index, movement] of movements.entries()) {
    if(movement > 0) {
        console.log(`Movement ${index +1} You deposited ${movement}`);
    } else {
        console.log(`Movement ${index +1} You withdrew ${Math.abs(movement)}`);
    }
}

console.log('~~~~ FOR EACH ~~~~')

// order for forEach loop --> current element, current index, entire array
// This is how the arguments are passed into the function
movements.forEach(function(movement, index, array) {
    if(movement > 0) {
        console.log(`Movement ${index +1} You deposited ${movement}`);
    } else {
        console.log(`Movement ${index +1} You withdrew ${Math.abs(movement)}`);
    }
})

// forEach With Maps and Sets
// Map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
console.log(currencies)
currencies.forEach(function(value, key, map){
    console.log(`${key}: ${value}`)
})

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique,)

currenciesUnique.forEach(function(value, _, map){
    console.log(`${value}: ${value}`)
})