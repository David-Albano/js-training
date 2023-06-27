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

    order: function(starterImdex, mainIndex) {
        return [this.starterMenu[starterImdex], this.mainMenu[mainIndex]]
    }

    // openingHours: {
    //     thu: {
    //     open: 12,
    //     close: 22,
    //     },
    //     fri: {
    //     open: 11,
    //     close: 23,
    //     },
    //     sat: {
    //     open: 0, // Open 24 hours
    //     close: 24,
    //     },
    // },
};

const arr = [2, 3, 4]
const a = arr[0]
const b = arr[1]
const c = arr[2]

const [x, y, z] = arr
console.log([x, y, z])
console.log(x, y, z)

const[first, second] = restaurant.categories
console.log(first, second)

const [first_1, , third] = restaurant.categories
console.log(first_1, third)

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main
// main = secondary
// secondary = temp

// Same as above but using destructuring
[main, secondary] = [secondary, main];

console.log(main, secondary);

// console.log(restaurant.order(2, 0))

// Receive 2 return values from a function
// Destructuring
const [starterFood, mainDish] = restaurant.order(2, 1)
console.log(starterFood, mainDish)

const nested = [2, 4, [5, 6]]
const [i, ,j] = nested
console.log(i, j)

const [n1, , [n2, n3]] = nested
console.log(n1, n2, n3)

// Default values
const [p, q, r] = [8, 9]
console.log(p, q, r)

const [p1 = 1, q1 = 1, r1 = 1] = [8, 9]
console.log(p1, q1, r1) // ---> 8, 9, 1

const [p2 = 1, q2 = 1, r2 = 1] = [8]
console.log(p2, q2, r2)  // ---> 8, 1, 1

const [p3 = 1, q3 = 1, r3 = 1] = []
console.log(p3, q3, r3)  // ---> 1, 1, 1
