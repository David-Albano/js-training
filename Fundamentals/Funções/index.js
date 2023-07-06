'use strict';

///////////////////////////////////////
// Default Parameters
// const bookings = [];

// const createBooking = function (
//     flightNum,
//     numPassengers = 1,
//     price = 199 * numPassengers
//     ) {
//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// How Passing Arguments Works

// const flight = 'LH234'
// const david = {
//     name: 'David Afonso',
//     passport: 4293842349,
// }

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999'
//     passenger.name = 'Mr. ' + passenger.name

//     if(passenger.passport === 4293842349) {
//         alert('Checked in')
//     } else {
//         alert('Wrong passport')
//     }
// }

// // checkIn(flight, david)
// // console.log(flight)
// // console.log(david)

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 100000000)
// }

// newPassport(david)
// checkIn(flight, david)


// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase()
// }

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ')
//     return [first.toUpperCase(), ...others].join(' ')
// }

// // Higher-order function
// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`)
//     console.log(`Transformed string: ${fn(str)}`)

//     console.log(`Transformed by : ${fn.name}`)
// }

// transformer('JavaScript is the best!', upperFirstWord)
// transformer('JavaScript is the best!', oneWord)

// // JS uses callbacks all the time
// const high5 = function() {
//     console.log('👋')
// }

// document.body.addEventListener('click', high5);

// ['John', 'Marta', 'Esteban', 'Laura'].forEach(high5)


// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting}, ${name}`)
//     }
// }

// const greeterHey = greet('Hey')
// greeterHey('David')
// greeterHey('Olivia')

// greet('Hello')('David')
// console.log('~~~~~~~~~~~~~~~~~')

// // Little challenge
// const greet2 = greeting => name => console.log(`${greeting}, ${name}`)

// const greeterMorning = greet2('Good Morning')
// greeterMorning('David')
// greeterMorning('Olivia')
// greet2('Good Morning')('David')

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${flightNum}`)
        this.bookings.push({
            flight: `${this.iataCode}${flightNum}, name: ${name}`
        })
    }
}

lufthansa.book(239, 'David Afonso')
lufthansa.book(635, 'John McArthur')
console.log(lufthansa)

const eurowings = {
    airline:'Eurowings',
    iataCode: '"EW',
    bookings: [],
}

const book = lufthansa.book

// DOES NOT work
// book(23, 'Vanessa Smith')

// Class Method
// First parameter must the objects we are point to
book.call(eurowings, 23, 'Vanessa Smith')
console.log(eurowings)

book.call(lufthansa, 115, 'Abdel Cooper')
console.log(lufthansa)

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 583, 'David Afonso')
console.log(swiss)

// Apply method (BARELY USED IN MODERN JAVASCRIPT) ---> Similar to the call method but it takes an array of the arguments needed
const flightData = [220, 'George Gibson']
book.apply(swiss, flightData)
console.log(swiss)

book.call(eurowings, ...flightData) // ------> Same as ---> book.apply(swiss, flightData)
console.log(eurowings)


// Bind method
// book.call(eurowings, 23, 'Vanessa Smith')

const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)

bookEW(23, 'Steven Williams')
bookLH(115, 'Teresa Matos')
bookLX(115, 'Robert Wood')

console.log(eurowings)
console.log(lufthansa)
console.log(swiss)

const bookEW23 = book.bind(eurowings, 23)
bookEW23('Stephen Roberts')

const bookLH112 = book.bind(lufthansa, 112)
bookLH112('Lucas Bosworth')


// With Event Listener
lufthansa.planes = 300
lufthansa.buyPlane = function() {
    console.log(this);
    
    this.planes++;
    console.log(this.planes);
}
// lufthansa.buyPlane()

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + (value * rate)
console.log(addTax(0.1, 200))

// # Creating a branch new specific function from the most general function (addTAX)
const addVAT = addTax.bind(null, 0.23) // ----->> addVAT = value => value + (value * 0.23)

console.log(addVAT(100))
console.log(addVAT(540))
console.log(addVAT(3000))

const addTaxRAte = function(rate){
    return function(value){
        return value + (value * rate)
    }
}


const addVAT2 = addTaxRAte(0.23)
console.log(addVAT2(540))
console.log(addVAT2(3000))
