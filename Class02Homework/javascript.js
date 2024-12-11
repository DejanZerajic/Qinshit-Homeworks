let input = prompt ("Enter the year you were born")
let convertedInput = parseInt (input)
console.log (typeof (convertedInput))
let calculation = ((convertedInput - 4) % 12)
console.log (typeof (calculation))
console.log (calculation)
if (calculation === 0) {
    console.log ("Your Chinese zodiac sign is Rat")
    }
else if (calculation === 1) {
    console.log ("Your Chinese zodiac sign is Ox")
    }
else if (calculation === 2) {
    console.log ("Your Chinese zodiac sign is Tiger")
    }    
else if (calculation === 3) {
    console.log ("Your Chinese zodiac sign is Rabbit")
    }
else if (calculation === 4) {
    console.log ("Your Chinese zodiac sign is Dragon")
    }
else if (calculation === 5) {
    console.log ("Your Chinese zodiac sign is Snake")
    }
else if (calculation === 6) {
    console.log ("Your Chinese zodiac sign is Horse")
    }
else if (calculation === 7) {
    console.log ("Your Chinese zodiac sign is Goat")
    }
else if (calculation === 8) {
    console.log ("Your Chinese zodiac sign is Monkey")
    }
else if  (calculation === 9) {
    console.log ("Your Chinese zodiac sign is Rooster")
    }
else if (calculation === 10) {
    console.log ("Your Chinese zodiac sign is Dog")
    }
else if (calculation === 11) {
    console.log ("Your Chinese zodiac sign is Pig")
    }