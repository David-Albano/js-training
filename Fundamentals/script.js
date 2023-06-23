// const day = 'monday'

// switch(day) {
//     case 'monday': // day === 'monday'
//         console.log("Plan cours structure")
//         console.log("Go to coding meetup")
//         break
        
//     case 'tuesday':
//         console.log("here we go after coding")
//         break
    
//     case 'wednesday':
//     case 'thursday':
//         console.log("Both wednesday and thursday")
//         break

//     case 'friday':
//         console.log("almost weekend!")
//         break
    
//     case 'sunday':
//     case 'saturday':
//         console.log("We can coding at on weekend anyways :)")
//         break
    
//     default:
//         console.log("Not a valid day!")
// }

// // Ternary Operator

// weather = 'Raining'

// action = weather === 'Raining' ? 'stay home and cuddle' : 'go to walk'

// console.log(`Today I'm gonna ${action}`)


// // Arrays

// const friends = ["Michael", "Steven", "Peter"] //Must used

// //Or

// const years = new Array(1991, 1984, 2008, 2023)

// // Arrays methods
// // .push() // Add to the end of an array
// // .unshift() // Add to the beginning of an array
// // .pop() // Remove the last element of an array
// // .shift() // Remove the first element of an array
// // .includes()
// // Get index of element

// index_peter = friends.indexOf('Peter')
// index_Steven = friends.indexOf('Peter')

// console.log(index_peter)
// console.log(friends[index_peter])

// console.log(index_Steven)
// console.log(friends[index_Steven])

// // includes() If an element actually exists in the array

// console.log(friends.includes('Peter'))
// console.log(friends.includes('David'))

// // Objects

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     age: 34,
//     birthYear: 1991,
//     job: 'Teacher',
//     students: ['Joseph', 'Mary', 'David'],
//     hasDriverLicense: true,

//     // V. 1
//     // calcAge: function(birthYear) {
//     //     return 2023 - birthYear
//     // }

//     // V. 2
//     // calcAge: function() {
//     //     console.log(this)
//     //     return 2023 - this.birthYear
//     // }

//     // V. 3
//     calcAge: function() {
//         this.age = 2023 - this.birthYear
//         return this.age
//     },

//     getSummary: function() {
//         return `${this.firstName} is ${this.calcAge()} years old ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'not'} driver license`
//     }
// }

// console.log(john)
// console.log(john.job)
// console.log(john.students)

// console.log(john['job'])
// console.log(john['students'])

// console.log(john['firstName'])
// console.log(john['lastName'])

// // We can put any expressions into the square brackets
// const nameKey = 'Name'
// console.log(john['first' + nameKey])
// console.log(john['last' + nameKey])


// const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, birthday, job, students")

// if (john[interestedIn]) {
//     console.log(john[interestedIn])
// }else {
//     console.log('invalid data')
// }
// // console.log(john.interestedIn) // This does not work because is taking interestedIn as a property that in this doesn't exist as a key in john object


// john.location = 'Portugal'
// john['email'] = 'john@mail.com'

// console.log(`${john.firstName} has ${john.students.length} students, and the oldest one's name is ${john.students[john.students.length - 1]}`)

// // V. 1
// // console.log(`${john.firstName} is ${john.calcAge(john.birthYear)} years old`)
// // // Also as john['calcAge'](john.birthYear)
// // console.log(`${john.firstName} is ${john['calcAge'](john.birthYear)} years old - 2`)

// // V. 2
// console.log(john.getSummary())
// console.log(john.age)



const john = {
    fullName: 'John Smith',
    mass: 78,
    height: 1.6,


    calcBMI: function() {
        return this.mass / (this.height ** 2)
    }
}

const mark = {
    fullName: "Mark Miller's",
    mass: 92,
    height: 1.95,


    calcBMI: function() {
        return this.mass / (this.height ** 2)
    }
}

john_bmi = john.calcBMI()
mark_bmi = mark.calcBMI()

console.log(`${john.fullName}'s BMI (${john_bmi}) is ${john_bmi > mark_bmi ? "greater" : "less"} than ${mark.fullName}'s BMI (${mark_bmi}) `)

