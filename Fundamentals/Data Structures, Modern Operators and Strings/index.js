'use strict';

// Data needed for a later exercise
const openingHours= {
    thu: {
    open: 12,
    close: 22,
    },
    fri: {
    open: 11,
    close: 23,
    },
    sat: {
    open: 0, // Open 24 hours
    close: 24,
    },
}

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address = "Another address"}) {
        console.log(`Ordered received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}h`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is you delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
    },

    orderPizza(mainIngredients, ...otherIngredients) {
        console.log(mainIngredients)
        console.log(otherIngredients)
    }
};

///////////////////////////////////////
// String Methods Practice

const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = function(code) {
    const list = code.split('+')
    for (const flight of list) {
        let flightInfo = flight.split(';')
        let message =  flightInfo[0].toLowerCase().includes('delayed') ? '🔴 ' : ''
        message += flightInfo[0].replaceAll('_', ' ').trim() + ` from ${flightInfo[1].slice(0, 3).toUpperCase()}` + ` from ${flightInfo[2].slice(0, 3).toUpperCase()}` + ` (${flightInfo[3].replace(':', 'h')})`
        console.log(message)
    }   
}

getCode(flights)



///////////////////////////////////////

// const airline = 'TAP Air Portugal'
// const plane = 'A320'

// console.log(plane[0])
// console.log(plane[1])
// console.log(plane[2])
// console.log(plane[3])
// console.log('B737'[0])
// console.log('B737'[3])

// console.log(airline.length)
// console.log('airline'.length)

// console.log(airline.indexOf('r'))
// console.log(airline.lastIndexOf('r'))
// console.log(airline.indexOf('A'))
// console.log(airline.lastIndexOf('A'))

// console.log(airline.indexOf('Portugal'))
// console.log(airline.indexOf('Air'))
// console.log(airline.indexOf('Word')) // ---->> -1 Because doesn't exists

// console.log(airline.slice(4))
// console.log(airline.slice(0, 3))
// console.log(airline.slice(3, airline.indexOf('ugal')))
// console.log(airline.slice(0, airline.indexOf(' ')))
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)) // ---> +1 So doesn't take the space in the slice
// console.log(airline.slice(-5, -1))

// const sliced = airline.slice(1, 6)
// console.log(sliced)
// const slicedTwice = sliced.slice(3)
// console.log(slicedTwice)

// const checkMiddleSeat = function(seat) {
//     // B and E are middle seat
//     const s = seat.slice(-1).toLowerCase()
//     console.log(s === 'b' || s === 'e' ? 'You got the middle seat 😬' : 'You got luck 😎')
// }

// checkMiddleSeat('11B')
// checkMiddleSeat('31A')
// checkMiddleSeat('07E')
// checkMiddleSeat('15b')

// console.log(new String('david'))
// console.log(typeof new String('david')) // ----> object

// console.log(new String('david').slice(1))
// console.log(typeof new String('david').slice(1))

// console.log(airline.toLowerCase())
// console.log(airline.toUpperCase())
// console.log('UPPERCASE'.toLowerCase())
// console.log('lowercase'.toUpperCase())

// const passenger = 'dAviD'
// const passengerLower = passenger.toLowerCase()
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
// console.log(passengerCorrect)

// // Comparing email
// const email = 'david@mail.com'
// const loginEmail = ' DavID@maIL.cOm \n'

// const lowerEmail = loginEmail.toLowerCase()
// const trimmedEmail = lowerEmail.trim() // trim() to remove/trim the blank spaces
// console.log(trimmedEmail)

// const normalizeEmail = loginEmail.toLowerCase().trim()
// console.log(normalizeEmail)
// console.log(email === normalizeEmail)

// // Replacing

// const priceGB = '288,97£'
// const priceUS = priceGB.replace('£', '$').replace(',', '.')
// console.log(priceUS)

// const announcement = 'All passenger come to boarding door 23. Boarding door 23!'
// console.log(announcement.replace('door', 'gate'))
// // console.log(announcement.replaceAll('door', 'gate'))

// console.log(announcement.replace(/door/g, 'gate')) // With Regular expressions

// // Boolean
// const plane2 = 'Airbus A320neo'
// console.log(plane2.includes('A320'))
// console.log(plane2.includes('neo'))
// console.log(plane2.includes('32'))

// console.log(plane2.startsWith('Air'))
// console.log(plane2.startsWith('A3'))

// if(plane2.startsWith('Airbus') && plane2.endsWith('neo')){
//     console.log('Part of the NEW Airbus family')
// } else {console.log('Is is not')}

// // Practice Exercise
// const checkBaggage = function(items) {
//     const baggage = items.toLowerCase()
//     if(baggage.includes('knife') || baggage.includes('gun')) {
//         console.log('Not allowed')
//     } else {
//         console.log('Allowed')
//     }
// }

// checkBaggage('I have a laptop, some Food and a pocket Knife')
// checkBaggage('Socks and camera')
// checkBaggage('Got some snacks and a gun for protection')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

// // Split and join
// console.log('a+very+nice+string'.split('+'))
// console.log('David Afonso'.split(' '))

// const [firstName, lastName] = 'David Afonso'.split(' ')
// console.log(firstName, lastName)

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
// console.log(newName)

// const arr = ['This', 'is', 'a', 'sentence'].join('_~_')
// console.log(arr)

// const capitalizeName = function(name) {
//     const names = name.split(' ')
//     const newNames = []
//     for(const word of names) {
//         // newNames.push(word[0].toUpperCase() + word.slice(1))
//         newNames.push(word.replace(word[0], word[0].toUpperCase()))
//     }
//     console.log(newNames.join(' '))
// }

// capitalizeName('david albano afonso mendez')
// capitalizeName('another name not capitalized')

// // Padding str

// const message = 'Go to gate 23!'
// console.log(message.padStart(25, '~ '))
// console.log('David'.padStart(25, '*'))
// console.log(message.padEnd(25, '~'))
// console.log('David'.padEnd(25, '*'))


// const maskCreditCard = function(number) {
//     const str = number  + '' // ----> = String(value)
//     const last = str.slice(-4)
//     return last.padStart(str.length, '*')
// }

// console.log(maskCreditCard('3817987634913847'))
// console.log(maskCreditCard(8083615387891635))
// console.log(maskCreditCard(88759635))

// // Repeat

// const message2 = 'Bad weather... All Departures Delayed... '
// console.log(message2.repeat(5))

// const planesInLine = function(n) {
//     console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`)
// }

// planesInLine(4)
// planesInLine(12)
// planesInLine(7)
// planesInLine(3)
// planesInLine(9)


// ~~~~~~~~~~~~ MAPS ~~~~~~~~~~~~
// const rest = new Map()
// rest.set('name', 'Classico Italiano')
// rest.set(1, 'Firenze, Italy')
// rest.set(2, 'Lisbon, Portugal')
// console.log(rest)

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are open :D')
//     .set(false, 'We are closed :(')

// console.log(rest)

// console.log(rest.get('name'))
// console.log(rest.get(true))
// console.log(rest.get('categories'))
// console.log(rest.get(2))

// const time = 21
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

// console.log(rest.has('categories'))
// rest.delete(1)
// console.log(rest)
// // rest.clear()
// // console.log(rest)

// const arr = [1, 2]
// rest.set(arr, 'Test')
// console.log(rest.get(arr))

// rest.set(document.querySelector('h1'), 'Heading')

// console.log(rest)
// console.log(rest.size)

// const question = new Map([
//     ['question', 'What\'s the best programming language in the world?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'JavaScript'],
//     ['correct', 3],
//     [true, 'Correct 🎉'],
//     [false, 'Try again!'],
// ])
// console.log(question)

// // Convert object to map
// console.log(Object.entries(openingHours))

// const hourMap = new Map(Object.entries(openingHours))
// console.log(hourMap)

// // Quiz app
// console.log(question.get('question'))
// for(const [key, value] of question) {
//     if(typeof key === 'number')
//         console.log(`Answer ${key}: ${value}`)
// }

// // const answer = Number(prompt('Your answer:'))
// const answer = 3
// console.log(answer)

// // answer === question.get('correct') ? console.log(question.get(true)) : console.log(question.get(false))
// // Or reduced
// console.log(question.get(answer === question.get('correct')))

// // Convert Map to Array

// console.log([...question])
// // console.log([...question.entries()]) // Same as above
// console.log([...question.keys()])
// console.log([...question.values()])


// ~~~~~~~~~~~ SETS ~~~~~~~~~~~
// Collection of unique values (not duplicated)
// In normal codebase the main usage of SETS is to remove of duplicated values of arrays

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
// console.log(ordersSet)

// console.log(new Set('david afonso'))

// console.log(ordersSet.size)
// console.log(ordersSet.has('Pizza'))
// console.log(ordersSet.has('Bread'))
// ordersSet.add('Garlic Bread')
// ordersSet.add('Garlic Bread')
// ordersSet.delete('Risotto')
// // ordersSet.clear() // Delete all elements inside a set
// console.log(ordersSet)

// for(const i of ordersSet) console.log(i)

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']

// // Creating Set from arrays, then destructure the set with spread operator and create the new array from that
// const staffUnique = [...new Set(staff)]
// console.log(staffUnique)

// console.log(new Set(staff).size)

// // Counting how many DIFFERENT letter there are in a string
// console.log(new Set('davidalbanoafonsomendez').size)


// const properties = Object.keys(openingHours)
// console.log(properties)

// let openStr = `We are open on ${properties.length} days: `

// // ~~~~~~~~Looping Objects~~~~~~~~~
// for(const day of Object.keys(openingHours)) {
//     openStr += `${day}, `
// }
// console.log(openStr)

// // Properties values
// const values = Object.values(openingHours)
// console.log(values)

// // Entire object
// const entries = Object.entries(openingHours)
// console.log(entries)

// for(const [key, {open, close}] of entries) {
//     console.log(`On ${key} we open at the ${open} and close at ${close}`)
// }



// if(restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open)

// // ~~~~~~~~ WITH optional chaining~~~~~~~~
// console.log(restaurant.openingHours.mon?.open)
// console.log(restaurant.openingHours.anotherProperty?.open)

// // If element before the '?' mark exists or is not false, then try to read the property afterwards the '?'
// console.log(restaurant?.openingHours)
// console.log(restaurant.openingHours?.fri)
// console.log(restaurant.openingHours.fri?.open)
// console.log(restaurant.openingHours?.sat?.open)


// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

// for (const day of days) {
//     const open = restaurant.openingHours[day]?.open ?? 'closed'
//     console.log(`On ${day} restaurant opens at ${open}`)
// }

// // Methods
// console.log(restaurant.order?.(3, 0) ?? 'Method doesn\'t exists')
// console.log(restaurant.orderPasta?.('Cheese', 'Sauce', 'Basil') ?? 'Method doesn\'t exists')
// console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method doesn\'t exists')

// // Arrays
// const users = [
//     {name: 'David', email: 'david@mail.com'}
// ]
// console.log(users[0]?.name ?? 'User array empty')

// const users2 = []
// console.log(users2[0]?.name ?? 'User array empty')
// console.log(users2[9]?.name ?? 'User array empty') // Out of index case also


// ~~~~~~~~~~ For-of-Loop ~~~~~~~~~~

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// for (const item of menu) console.log(item)

// for (const [number, name] of menu.entries()) {
//     console.log(`${number + 1}: ${name}`)
// }
// console.log([...menu.entries()])


// ~~~~~~~~~~~ LOGICAL ASSIGNMENT OPERATORS ~~~~~~~~~~~

// const rest1 = {
//     name: 'Capri',
//     numGuests: 20
// }

// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Rossi'
// };

// const rest3 = {
//     name: 'L\'Áncora',
//     numGuests: 0
// }

// OR ASSIGNMENT OPERATOR
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

                            //   Something like a += b ----> a = a + b
// rest1.numGuests ||= 10      // ----> rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests ||= 10      // ----> rest2.numGuests = rest2.numGuests || 10
// console.log(rest1)
// console.log(rest2)

// // NULLISH ASSIGNMENT OPERATOR
// rest3.numGuests ??= 10      // ----> rest3.numGuests = rest3.numGuests ?? 10
// console.log(rest3)

// // AND ASSIGNMENT OPERATOR -- Assign a value to a variable if this one is truthy
// // rest1.owner = rest1.owner && '<ANONYMOUS>' // undefined cause' owner is falsy
// // rest2.owner = rest2.owner && '<ANONYMOUS>' // (ANONYMOUS IF OWNER IS TRUE)

// rest1.owner &&= '<ANONYMOUS>' // In this way is NOT declared undefined
// rest2.owner &&= '<ANONYMOUS>'
// console.log(rest1)
// console.log(rest2)

// rest3.owner = rest3.owner && '<ANONYMOUS>' // In this way is declared undefined
// console.log(rest3)


///////////////////////////////////////////////
// --------  The Nullish Coalescing Operator (??) --------------
// Works with the concept of nullish values instead of falsy values
// Nullish: null and undefined (NOT 0 or '')
// restaurant.numGuests = 0
// const guest = restaurant.numGuests || 10
// console.log(guest) // With || will be 10

// const guestCorrect = restaurant.numGuests ?? 10
// console.log(guestCorrect)  // With || will be 0


//  -------------  Short Circuit with && and || -----------
// Logical Operators
// They use ANY data typeof, return ANY data typeof, and short-circuiting

//'----- OR || OPERATOR ------'
// console.log('----- OR || OPERATOR ------')

// // With || If the first is true, it will return that same first value, and the second one will not be evaluated (short-circuiting)
// // otherwise i'll return the second one will be evaluated and returned
// console.log(3 || 'David') // -----> 3
// console.log('' || 'David') // -----> 'David'
// console.log(true || 0) // -----> true
// console.log(undefined || null) // -----> undefined

// console.log(undefined || 0 || '' || 'Hello' || 23 || null) // -----> 'Hello'

// const guest1 = restaurant.numGuests ? restaurant.numGuest : 10
// console.log(guest1)

// restaurant.numGuests = null
// const guest2 = restaurant.numGuests || 10
// console.log(guest2)

// restaurant.numGuests = 23
// const guest3 = restaurant.numGuests || 10
// console.log(guest3)

// // '----- AND && OPERATOR ------'
// // && operator is only true when all operands are true

// console.log('----- AND && OPERATOR ------')
// console.log(0 && 'David') // If first is falsy, will return the first one immediately regardless the second one is true or not
// console.log(7 && 'David') // If first is true, will return the second one one immediately regardless is true or not
// console.log(7 && false)  //                 ""      ""      ""        ""
// console.log(null && undefined)
// console.log(undefined && false)
// console.log('multiple ----')
// console.log('Hello' && 23 && null && 'David') // for multiple operands the short-circuiting will return the first falsy operand
// console.log('Good' && 7 && true && 100) // For multiple operands if all are true then return the last one evaluated

// // -----
// if (restaurant.orderPizza) {
//     restaurant.orderPizza('sauce', 'cheese', 'basil')
// }

// If the method/key/attribute exists then call the method / (execute the second operand)
// restaurant.orderPizza && restaurant.orderPizza('sausage', 'cheese', 'bell pepper')

// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });

// restaurant.orderDelivery({
//     address: 'Via del sole, 21',
//     starterIndex: 1,
// });

// 1) Destructuring

// -------------- Rest Pattern -------------- To pack elements into an array
// SPREAD, because on RIGHT side of equal sign (=)
// const arr = [1, 2,  ...[3, 4]]

// // REST, because on LEFT side of equal sign (=)

// const [a, b, c, ...others] = [ 1, 2, 3, 4, 5] // Takes the remainning elements of of the array and pu it into a new array (others in this case)
// console.log(a, b, c, others)

// // REST skip the not assigned element ('Pasta' in this case)
// const [pizza1, , risotto1, ...otherFood1] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza1, risotto1, otherFood1)

// // REST skip the not assigned element (anyone in this case because Rissotto is the last one in this array)
// const [, , , , pizza, , risotto, ...otherFood] = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(pizza, risotto, otherFood)

// // Objects
// const {sat, ...weekdays} = restaurant.openingHours
// console.log(sat, weekdays)

// // 2) Functions

// const add = function(...numbers) { // packing elements unpacked into an array
//     console.log(numbers)
//     let sum = 0
//     for(let i = 0; i<numbers.length; i++) sum += numbers[i]
//     console.log(sum)
// }

// add(2, 3)
// add(5, 3, 7, 2)
// add(8, 2, 7, 6, 9, 10)

// const x = [23, 5, 7]
// add(...x) // unpacking array
// add(...x, 6, 7, 0, 9) // unpacking array more individuals values

// restaurant.orderPizza('mushrooms', 'onion', 'olies', 'spinaches')
// restaurant.orderPizza('mushrooms')


// -------------- Spread Operator -------------- To unpack an array
// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]]
// console.log(badNewArray)

// const newArr = [1, 2, ...arr]
// console.log(newArr)
// console.log(...newArr) // ----> console.log(1, 2, 7, 8, 9)

// const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Stracciatella']
// console.log(newMenu)

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu]
// console.log(mainMenuCopy)

// // Join 2 arrays
// // const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// const wholeMenu = [...restaurant.starterMenu, ...newMenu]
// console.log(wholeMenu)

// // Iterables are: arrays, string, maps, sets, BUT NOT OBJECTS
// const str = 'David'
// const letter = [...str, '', 'S']
// console.log(letter)
// console.log(...str) // ----> console.log('D', 'a', 'v', 'i', 'd')
// // console.log(`${...str} Afonso`) ------>>> Error using the spread operator in this way

// const ingredients = [
//     // prompt('Let\'s make pasta! Ingredient 1:'),
//     // prompt('Ingredient 2:'),
//     // prompt('Ingredient 3:')
// ]
// console.log(ingredients)

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])  // Bad practice way
// restaurant.orderPasta(...ingredients)

// // Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'}
// console.log(newRestaurant)

// const restaurantCopy = {...restaurant}
// console.log(restaurantCopy)

// restaurantCopy.name = 'Ristorante Roma'
// console.log(restaurantCopy.name)
// console.log(restaurant.name)


// ----------------  Destructuring Objects ----------------
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

// // Setting default values for properties in case they don't exist
// const { menu = [], starterMenu: starters = []} = restaurant
// console.log( menu, starters)

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};

// ({a, b} = obj);
// console.log(a, b)

// // Nested objects
// const {fri: {open: o, close: c}} = openingHours
// console.log('open: ', o)
// console.log('close: ', c)


// -----------------  Destructuring Arrays  -----------------
// const arr = [2, 3, 4]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// const [x, y, z] = arr
// console.log([x, y, z])
// console.log(x, y, z)

// const[first, second] = restaurant.categories
// console.log(first, second)

// const [first_1, , third] = restaurant.categories
// console.log(first_1, third)

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main
// // main = secondary
// // secondary = temp

// // Same as above but using destructuring
// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// // console.log(restaurant.order(2, 0))

// // Receive 2 return values from a function
// // Destructuring
// const [starterFood, mainDish] = restaurant.order(2, 1)
// console.log(starterFood, mainDish)

// const nested = [2, 4, [5, 6]]
// const [i, ,j] = nested
// console.log(i, j)

// const [n1, , [n2, n3]] = nested
// console.log(n1, n2, n3)

// // Default values
// const [p, q, r] = [8, 9]
// console.log(p, q, r)

// const [p1 = 1, q1 = 1, r1 = 1] = [8, 9]
// console.log(p1, q1, r1) // ---> 8, 9, 1

// const [p2 = 1, q2 = 1, r2 = 1] = [8]
// console.log(p2, q2, r2)  // ---> 8, 1, 1

// const [p3 = 1, q3 = 1, r3 = 1] = []
// console.log(p3, q3, r3)  // ---> 1, 1, 1
