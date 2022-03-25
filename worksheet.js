"use strict";


// Problem One: Day of the Week Variable

// let dayOfWeek = 'Monday';

// console.log(dayOfWeek)

// dayOfWeek = 'Friday';

// console.log(`I can't wait for ${dayOfWeek}`)

// Problem Two: User Input

// let animalInput = prompt('What is your favorite animal?');
// let colorInput = prompt('What is your favorite color?');

// console.log(`I've never seen a ${colorInput} ${animalInput}!`)

// Problem Three Conditionals - Meals Breakfast - banana toast lunch - salad dinner - pasta


// function generateMeal() {
//     let timeOfDay = 1300
//     let meal = ''
//     if (timeOfDay < 1200) {
//         meal = 'Peanut Butter Banana Toast'
//     } else if (timeOfDay >= 1200 && timeOfDay <= 1700) {
//         meal = 'Salad'
//     } else if (timeOfDay > 1700) {
//         meal = 'Pasta'
//     }
//     console.log(meal)
// }

// generateMeal()

// Problem Four Conditionals - Random Number

// let randomNumber = Math.floor(Math.random() * 10);

// function randomBand(randomNumber) {
//     if (randomNumber >= 0 && randomNumber <= 2) {
//         console.log('Beatles')
//     } else if (randomNumber >= 3 && randomNumber <= 5) {
//         console.log('Stones')
//     } else if (randomNumber >= 6 && randomNumber <= 8) {
//         console.log('Floyd')
//     } else if (randomNumber >= 9 && randomNumber <= 10) {
//         console.log('Hendrix')
//     }
// }

// randomBand(randomNumber);

// Problem Five - For Loops

// function printStatement() {
//     for (let i = 0; i < 7; i++) {
//         console.log('Javascript is cool!')
//     }
// }

// printStatement();

// let number = 0
// for(let i = 0; i < 11; i++){
//     console.log(number)
//     number++
// }

// let hello = 'hello'
// let goodbye = 'goodbye'

// for(let i = 0; i < 5; i++){
//     console.log(hello);
//     console.log(goodbye);
// }

// Problem Six - Functions - Favorite Movie

// function printMovieName(){
//     let favoriteMovie = 'Hot Rod';
//     console.log(favoriteMovie)
// }

// printMovieName();

// // Problem Seven - Functions - Favorite Band

// function favoriteBand() {
//     let favoriteBand = prompt('What is your favorite band?');
//     return favoriteBand
// }

// let userFavoriteBand = favoriteBand()
// console.log(userFavoriteBand)

// // Problem Seven - Functions - Concert

// function concertDisplay(musicalAct) {
//     let myStreet = prompt('What street do you live on?');
//     console.log(`It would be great it ${musicalAct} played a show on ${myStreet}!`);
// }

// concertDisplay(userFavoriteBand)

//Problem Eight - Arrays - Desktop Items

// let desktopItems = ['lamp', 'bulletin board', 'pen holder'];
// console.log(desktopItems[1])

// desktopItems.push('Infinity Gauntlet')

// for(let i = 0; i < desktopItems.length; i++){
//     console.log(desktopItems[i])
// }

// Problem Nine: Magic Number

let magicNumber = Math.floor(Math.random() * 100);
let guess = 0;

while (guess != magicNumber) {
    guess = prompt('Guess the magic number!')
    if (guess == magicNumber) {
        alert(`${magicNumber} - Congratulations, you guessed the magic number!!`) 
    } else if (guess > magicNumber) {
        console.log('Too high!')
        if (guess <= magicNumber + 10) {
            console.log('Getting Warmer!')
        }
    } else if (guess < magicNumber) {
        console.log('Too low!')
        if (guess >= magicNumber - 10) {
            console.log('Getting Warmer!')
        }
    } else {
        console.log('Invalid input! Try again.')
    }
}



