'use strict';

const account1 = {
    owner: 'David Afonso',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
owner: 'Ricardo Matos',
movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
interestRate: 1.5,
pin: 2222,
};

const account3 = {
owner: 'Ana Figueiredo',
movements: [200, -200, 340, -300, -20, 50, 400, -460],
interestRate: 0.7,
pin: 3333,
};

const account4 = {
owner: 'Sandra Souki',
movements: [430, 1000, 700, 50, 90],
interestRate: 1,
pin: 4444,
};

const account5 = {
owner: 'Marcos Pereira',
movements: [-430, -1000, -700, -50, -90],
interestRate: 1,
pin: 5555,
};

const accounts = [account1, account2, account3, account4];

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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for(const movement of movements) {
// for(const [index, movement] of movements.entries()) {
//     if(movement > 0) {
//         console.log(`Movement ${index +1} You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${index +1} You withdrew ${Math.abs(movement)}`);
//     }
// }

// console.log('~~~~ FOR EACH ~~~~')

// // order for forEach loop --> current element, current index, entire array
// // This is how the arguments are passed into the function
// movements.forEach(function(movement, index, array) {
//  if(movement > 0) {
//      console.log(`Movement ${index +1} You deposited ${movement}`);
//  } else {
//     console.log(`Movement ${index +1} You withdrew ${Math.abs(movement)}`);
//  }
// })

// // forEach With Maps and Sets
// // Map
// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);
// console.log(currencies)
// currencies.forEach(function(value, key, map){
//     console.log(`${key}: ${value}`)
// })

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
// console.log(currenciesUnique,)

// currenciesUnique.forEach(function(value, _, map){
//     console.log(`${value}: ${value}`)
// })

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their 
// dog's age, and stored the data into an array (one array for each). For now, they are just 
// interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at
//  least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats,
//  not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied 
//  array (because it's a bad practice to mutate function parameters)

// 2. Create an array with both Julia's (corrected) and Kate's data

// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, 
// and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")

// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const checkDog = function(arr1, arr2) {
//     let correctedArr = arr1.slice(1, -2)
//     const bothArr = [...correctedArr, ...arr2]

//     bothArr.forEach((age, index)=>{
//         let typeDog = age > 3 ? `an adult and is ${age} years old` : 'a puppy 🐶'
//         console.log(`Dog number ${index + 1} is still ${typeDog}`)
//     })

// }


// const Julia = [3, 5, 2, 12, 7]
// const Kate = [4, 1, 15, 8, 3]

// checkDog(Julia, Kate)
// checkDog([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])

// MAP, FILTER and REDUCE
// Map method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// const euroToUsd = 1.1

// const movementUSD = movements.map((value)=> value * euroToUsd)
// console.log(movementUSD)

// const movementsDescriptions = movements.map((movement, index) => {
//     return `Movement ${index +1} You ${movement > 0 ? 'deposit' : 'withdrew'} ${Math.abs(movement)}`
// })

// console.log(movementsDescriptions)

// Filter method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// const deposits = movements.filter(function(value) {
//     return value > 0
// })
// console.log(deposits) // ---> [200, 450, 3000, 70, 1300]

// const withdrawals = movements.filter((value) => value < 0)
// console.log('withdrawals: ', withdrawals)

// // Reduce method

// // accumulator --> SNOWBALL
// // const balance = movements.reduce(function (acc, cur, i, arr) {
// //   console.log(`Iteration ${i}: ${acc}`);
// //   return acc + cur;
// // }, 0);

// const balance = movements.reduce((accumulator, value) => accumulator + value, 0)

// console.log(balance)

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Maximum Value
// const maxValue = movements.reduce((accumulator, value) => accumulator = value > accumulator ? value : accumulator, 0)
// console.log(maxValue)

// // Maximum Value
// const minValue = movements.reduce((accumulator, value) => accumulator = value < accumulator ? value : accumulator, 0)
// console.log(minValue)


// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages 
// to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and 
// does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years
// old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs 
//     that are at least 18 years old)

// 3. Calculate the average human age of all adult dogs (you should already know from other challenges 
//     how we calculate averages 😉)

// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = dogAges => {
//     let humanAges = dogAges
//     .map((age) => age <= 2 ? age * 2 : 16 + age * 4)
//     .filter(age => age > 18)

//     const average = humanAges.reduce((accumulator, age) => accumulator + age, 0) / humanAges.length
//     return Math.round(average * 100) / 100
// }

// const calcAverageHumanAge2 = dogAges => 
//     dogAges
//     .map(age => age <= 2 ? age * 2 : 16 + age * 4)
//     .filter(age => age > 18)
//     .reduce((accumulator, age, index, array) => Math.round((accumulator + age / array.length) * 100) / 100, 0)

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))

// console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]))
// console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]))


// // Chaining methods

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const toUSD = 1.1

// const convertToUSD = movements
//                     .filter(value => value > 0)
//                     .map(value => Math.round((value * toUSD) * 100) / 100)

// console.log(convertToUSD)

// Find method --> Return the first element (itself) that fulfill the condition
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(value => value < 0)
// console.log(firstWithdrawal)

// const account = accounts.find(account => account.owner === 'David Afonso')
// console.log(account)


// // SOME method Return true if any of the elements of the array satisfy the condition

// // EQUALITY
// // console.log(movements)
// // console.log(movements.includes(-130))
// // console.log(movements.includes(-230))

// // CONDITION
// const anyDeposits = movements.some(value => value > 0) // ---> true
// console.log(anyDeposits)

// const anyDeposits1 = movements.some(value => value > 4000) // ---> false
// console.log(anyDeposits1)

// const anyDeposits2 = movements.some(value => value < -1500) // ---> false
// console.log(anyDeposits2)

// const anyDeposits3 = movements.some(value => value === 1300) // ---> true
// console.log(anyDeposits3)


// // EVERY method Return true if ALL THE ELEMENTS of the array satisfy the condition
// console.log(movements.every(value => value > 0)) // ---> false
// console.log(account4.movements.every(value => value > 0)) // ---> true

// // Separate callback

// const areDeposits = value => value > 0
// const areWithdrawals = value => value < 0

// console.log(account4.movements.every(areDeposits)) // ---> true
// console.log(account4.movements.every(areWithdrawals)) // ---> false
// console.log(account5.movements.every(areDeposits)) // ---> true
// console.log(account5.movements.every(areWithdrawals)) // ---> true

// console.log(account1.movements.some(areDeposits))
// console.log(account1.movements.filter(areDeposits))

// flat method

// const arr = [[1, 2, 3, 4], [5, 6, 7, 8], 9, 10]
// console.log(arr.flat())

// const arrDeep = [[[[1, [2]], 3, 4], [5, [6, 7], 8], [9, [10]]]]
// console.log(arrDeep.flat(2))
// console.log(arrDeep.flat(3))
// console.log(arrDeep.flat(4))

// const totalBalanceAllMovements = accounts
//     .map(account => account.movements)
//     .flat()
//     .reduce((accumulator, value) => accumulator + value, 0)

// console.log(totalBalanceAllMovements)

// // flatMap --- Only goes to one deep level, 
// // so for deeper arrays levels flat method is needed instead

// const totalBalanceAllMovements2 = accounts
//     .flatMap(account => account.movements)
//     .reduce((accumulator, value) => accumulator + value, 0)

// console.log(totalBalanceAllMovements2)

// Sort method

// Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// // Numbers
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// // return < 0, A, B (keep order)
// // return > 0, B, A (switch order)

// // Ascending
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });

// // We could say sort((a, b) => a - b (from smallest (a)) to (largest (b))

// movements.sort((a, b) => a - b);
// console.log(movements);

// // Descending
// // movements.sort((a, b) => {
//     //   if (a > b) return -1;
//     //   if (a < b) return 1;
//     // });

// // We could say sort((a, b) => b - a (from largest (b)) to (smallest (a))
// movements.sort((a, b) => b - a);
// console.log(movements);

// Arrays Method Practice

// 1.
// const bankDepositSum = accounts
//     .flatMap(account => account.movements)
//     .filter(value => value > 0)
//     .reduce((sum, value) => sum + value, 0)

// console.log(bankDepositSum) 

// // 2.

// // const numDeposits1000 = accounts
// //     .flatMap(account => account.movements)
// //     .filter(value => value >= 1000).length

// // Same as above but with reduce method instead of filter method
// const numDeposits1000 = accounts
//     .flatMap(account => account.movements)
//     .reduce((count, value) => value >= 1000 ? ++count : count, 0)

// console.log(numDeposits1000) 

// // Prefixed ++ operator
// let a = 10
// // console.log(a++) // ---> 10 still
// console.log(++a) // ---> 11 now
// console.log(a) // ---> 11 now

// // 3.

// const {deposits, withdrawals} = accounts
//     .flatMap(account => account.movements)
//     .reduce((sum, value) => {
//         sum[value > 0 ? 'deposits' : 'withdrawals'] += value

//         return sum
//     }, {deposits : 0, withdrawals : 0,})

// console.log(deposits)
// console.log(withdrawals)

// // 4. 

// const convertTitleCase = function(title) {
//     const capitalize = str => str[0].toUpperCase() + str.slice(1)

//     const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//     return title
//         .toLowerCase()
//         .split(' ')
//         .map(word => !exceptions.includes(word) ? capitalize(word) : word)
//         .join(' ')
// }   

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('EXAMPLE of a title here to practice, a little bit Long one'))
// console.log(convertTitleCase('and here is another title with an EXAMPLE'))

// CHALLENGE

// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Formula: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// TEST DATA:
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];

dogs.forEach((dog) => {
    // 1
    dog.recommendedFood = Math.trunc((dog.weight ** 0.75 * 28) * 100) / 100

    // 2
    if (dog.owners.includes('Sarah'))
    console.log(`Sarah\'s dog is eating too ${ dog.curFood < dog.recommendedFood ? 'little' : 'much'}`)
})

// 3
const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood ? dog.owners : '')
    .flatMap(dog => dog.owners)

const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood ? dog.owners : '')
    .flatMap(dog => dog.owners)

// console.log(ownersEatTooLittle)
// console.log(ownersEatTooMuch)

// 4
console.log(ownersEatTooLittle.join(' and ') + '\'s eat too little!')

console.log(ownersEatTooMuch.join(' and ') + '\'s eat too much!')

// 5
console.log(`There is ${dogs.some((dog) => dog.curFood === dog.recommendedFood) ? 'at least one' : 'not any'} dog that eats the EXACTLY amount of food that is recommended `)

// 6
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;

console.log(`There is ${dogs.some(checkEatingOkay) ? 'at least one' : 'not any'} dog that eats an OKAY amount of food that is recommended `)

// 7
console.log(dogs.filter(checkEatingOkay));

// 8
const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
