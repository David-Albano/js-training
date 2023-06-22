const day = 'monday'

switch(day) {
    case 'monday': // day === 'monday'
        console.log("Plan cours structure")
        console.log("Go to coding meetup")
        break
        
    case 'tuesday':
        console.log("here we go after coding")
        break
    
    case 'wednesday':
    case 'thursday':
        console.log("Both wednesday and thursday")
        break

    case 'friday':
        console.log("almost weekend!")
        break
    
    case 'sunday':
    case 'saturday':
        console.log("We can coding at on weekend anyways :)")
        break
    
    default:
        console.log("Not a valid day!")
}

// Ternary Operator

weather = 'Raining'

action = weather === 'Raining' ? 'stay home and cuddle' : 'go to walk'

console.log(`Today I'm gonna ${action}`)

