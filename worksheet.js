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

let randomNumber = Math.floor(Math.random() * 10);

function randomBand(randomNumber) {
    if (randomNumber >= 0 && randomNumber <= 2) {
        console.log('Beatles')
    } else if (randomNumber >= 3 && randomNumber <= 5) {
        console.log('Stones')
    } else if (randomNumber >= 6 && randomNumber <= 8) {
        console.log('Floyd')
    } else if (randomNumber >= 9 && randomNumber <= 10) {
        console.log('Hendrix')
    }
}

randomBand(randomNumber);
