"use strict";
//Muhammad Akif 
//12 July 2023
/* Exercise 33 */
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numArray.forEach((element) => {
    let ending;
    if (element === 1) {
        ending = 'st';
    }
    else if (element === 2) {
        ending = 'nd';
    }
    else if (element === 3) {
        ending = 'rd';
    }
    else {
        ending = 'th';
    }
    console.log(`${element}${ending}`);
});
