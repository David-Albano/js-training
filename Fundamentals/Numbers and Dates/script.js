"use strict";

/////////////////////////////////////////////////
// LECTURES

console.log(23 === 23.0)

// Base 10 -> 0 to 9 .... 1/10 = 0.1 ... 3/10 = 3.333333l
// Binary base 2 -> 0 and 1 

console.log(0.1 + 0.2);

// Conversion
console.log(Number('23'))
console.log(+'23')

// Parsing

console.log(Number.parseInt('30px', 10)) // --> Should start with a number
console.log(Number.parseInt('e0px', 10))
console.log(Number.parseInt('2.5rem')) // --> 2

console.log(Number.parseFloat('2.5rem'))
console.log(Number.parseFloat('   2.5rem    '))
console.log(Number.parseFloat('r2.5rem'))

// isNan - Check if value is NaN (Not a Number)
console.log(Number.isNaN(20))
console.log(Number.isNaN('20'))
console.log(Number.isNaN('hello')) // --> false
console.log(Number.isNaN(+'20X')) // --> true
console.log(Number.isNaN(23 / 0)) // --> false ... 23 / 0 = Infinity

// isFinite - Better that isNaN for checking if value is number
console.log(Number.isFinite(2)) // --> true
console.log(Number.isFinite('2')) // --> false
console.log(Number.isFinite(+'20X')) // --> false
console.log(Number.isFinite(23 / 0)) // --> false ... 23 / 0 = Infinity


console.log(Number.isInteger(7))
console.log(Number.isInteger(7.1))
console.log(Number.isInteger(56 / 0))

