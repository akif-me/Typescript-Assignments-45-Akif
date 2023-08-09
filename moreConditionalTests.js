"use strict";
//Muhammad Akif 
//12 July 2023
/* Exercise 24 */
// Tests for equality and inequality with strings
let favoriteColor = 'blue';
let leastFavoriteColor = 'red';
console.log("Is favorite color 'blue'? I predict True.");
console.log(favoriteColor === 'blue');
console.log("Is least favorite color not 'green'? I predict True.");
console.log(leastFavoriteColor !== 'green');
// Tests using the lower case function
let city = 'New York';
console.log("Is city lowercase 'new york'? I predict False.");
console.log(city.toLowerCase() === 'new york');
// Numerical tests
let x = 10;
let y = 20;
console.log("Is x equal to y? I predict False.");
console.log(x === y);
console.log("Is x less than y? I predict True.");
console.log(x < y);
console.log("Is y greater than or equal to 20? I predict True.");
console.log(y >= 20);
console.log("Is x less than or equal to 5? I predict False.");
console.log(x <= 5);
// Tests using "and" and "or" operators
let sunnyDay = true;
let warmTemperature = true;
console.log("Is it a sunny day and warm temperature? I predict True.");
console.log(sunnyDay && warmTemperature);
console.log("Is it a sunny day or warm temperature? I predict True.");
console.log(sunnyDay || warmTemperature);
// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));
// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
