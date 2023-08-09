"use strict";
//Muhammad Akif 
//12 July 2023
/* Exercise 6 */
var personName;
personName = "\tMuhammad Akif\n";
console.log(personName);
let trimmedPersonName = personName.replace(/^\s+|\s+$/gm, '');
console.log(trimmedPersonName);
