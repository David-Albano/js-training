/*
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
    [FIRST HALF] 17: ⚽️ GOAL
*/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);
// console.log(...gameEvents.values())
// console.log(...gameEvents.keys())
// console.log(...gameEvents.entries())
// 1rst Task
// ----Way 1
// const events = new Set()
// for(const event of [...gameEvents]) {
//         events.add(event[1])
//     }
    
// console.log([...events])

// ----Way 2 more efficient

const events2 = [...new Set(gameEvents.values())]
console.log(events2)


// 2nd Task
gameEvents.delete(64)
// console.log(gameEvents)

// 3rd Task
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`)

// 4th Task
for(const [time, event] of gameEvents.entries()) {
    let half = time < 45 ? 'FIRST' : 'SECOND'
    let eventHappened = `[${half} TIME] ${time}: ${event}`
    console.log(eventHappened)
}
