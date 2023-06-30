'use strict';

// Data needed for a later exercise
const flights =
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    
    openingHours: {
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
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address = "Another address"}) {
        console.log(`Ordered received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}h`);
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is you delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
    },

    orderPizza: function(mainIngredients, ...otherIngredients) {
        console.log(mainIngredients)
        console.log(otherIngredients)
    }
};

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
