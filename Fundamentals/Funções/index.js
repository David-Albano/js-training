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

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${flightNum}`)
//         this.bookings.push({
//             flight: `${this.iataCode}${flightNum}, name: ${name}`
//         })
//     }
// }

// lufthansa.book(239, 'David Afonso')
// lufthansa.book(635, 'John McArthur')
// console.log(lufthansa)

// const eurowings = {
//     airline:'Eurowings',
//     iataCode: '"EW',
//     bookings: [],
// }

// const book = lufthansa.book

// // DOES NOT work
// // book(23, 'Vanessa Smith')

// // Class Method
// // First parameter must the objects we are point to
// book.call(eurowings, 23, 'Vanessa Smith')
// console.log(eurowings)

// book.call(lufthansa, 115, 'Abdel Cooper')
// console.log(lufthansa)

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: []
// }

// book.call(swiss, 583, 'David Afonso')
// console.log(swiss)

// // Apply method (BARELY USED IN MODERN JAVASCRIPT) ---> Similar to the call method but it takes an array of the arguments needed
// const flightData = [220, 'George Gibson']
// book.apply(swiss, flightData)
// console.log(swiss)

// book.call(eurowings, ...flightData) // ------> Same as ---> book.apply(swiss, flightData)
// console.log(eurowings)


// // Bind method
// // book.call(eurowings, 23, 'Vanessa Smith')

// const bookEW = book.bind(eurowings)
// const bookLH = book.bind(lufthansa)
// const bookLX = book.bind(swiss)

// bookEW(23, 'Steven Williams')
// bookLH(115, 'Teresa Matos')
// bookLX(115, 'Robert Wood')

// console.log(eurowings)
// console.log(lufthansa)
// console.log(swiss)

// const bookEW23 = book.bind(eurowings, 23)
// bookEW23('Stephen Roberts')

// const bookLH112 = book.bind(lufthansa, 112)
// bookLH112('Lucas Bosworth')


// // With Event Listener
// lufthansa.planes = 300
// lufthansa.buyPlane = function() {
//     console.log(this);
    
//     this.planes++;
//     console.log(this.planes);
// }
// // lufthansa.buyPlane()

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + (value * rate)
// console.log(addTax(0.1, 200))

// // # Creating a branch new specific function from the most general function (addTAX)
// const addVAT = addTax.bind(null, 0.23) // ----->> addVAT = value => value + (value * 0.23)

// console.log(addVAT(100))
// console.log(addVAT(540))
// console.log(addVAT(3000))

// const addTaxRAte = function(rate){
//     return function(value){
//         return value + (value * rate)
//     }
// }


// const addVAT2 = addTaxRAte(0.23)
// console.log(addVAT2(540))
// console.log(addVAT2(3000))


// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
        // 0: JavaScript
        // 1: Python
        // 2: Rust
        // 3: C++
        // (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

// 2. Call this method whenever the user clicks the "Answer poll" button.

// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), 
//    which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). 
//    This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 

// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]


// 1rst Task
const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(prompt(
            `${this.question}\n${this.options.join('\n')}\n(Write option number)`
        ))
        
        // If any of the conditions are true then the last one is executed (this.answers[answer]++)
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++

        this.displayResults()
        this.displayResults('string')
    },

    displayResults(type = 'array') {
        if(type === 'array') {
            console.log(this.answers)
        } else if(type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
}

document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll))

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });