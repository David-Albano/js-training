'use strict';

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e']

// SLICE
console.log(arr.slice(2))
console.log(arr.slice(2, 4))
console.log(arr.slice(-2))
console.log(arr.slice(1, -2))
console.log(arr.slice())
console.log([...arr])

// SPLICE  --> Mutate the original array
// console.log(arr.splice(2))
arr.splice(-1)
arr.splice(1, 2)
console.log(arr)

// REVERSE --> Mutate the original array
const arr2 = ['j', 'i', 'h', 'g', 'j']
console.log(arr2.reverse())
console.log(arr2)
console.log(arr2.reverse())
console.log(arr2)


// CONCAT
const letters = arr.concat(arr2)
console.log(letters)
console.log([...arr, ...arr2])

// JOIN
console.log(letters.join(' - '))
console.log('~~~~~~~~~~~~~~~~~~')


// at method
const arr3 = [23, 11, 64]
console.log(arr3[0])
console.log(arr3.at(0))

// getting last array element
console.log(arr3[arr3.length - 1])
console.log(arr3[arr3.length - 1])
console.log(arr3.slice(-1)[0])
console.log(arr3.at(-1))

console.log('David'.at(-1))
console.log('David'.at(-2))
