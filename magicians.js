"use strict";
//Muhammad Akif 
//12 July 2023
/* Exercise 41, 42, 43 */
let magiciansNames;
function showMagicians(namesOfMagicians) {
    for (const magician of namesOfMagicians) {
        console.log(magician);
    }
}
magiciansNames = ["A", "B", "C", "D", "E", "F"];
showMagicians(magiciansNames);
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`;
    }
}
make_great(magiciansNames);
showMagicians(magiciansNames);
let greatMagicians = [];
function makeGreat(magician) {
    for (const mag of magician) {
        greatMagicians.push(`The Great ${mag}`);
    }
}
makeGreat(magiciansNames);
showMagicians(greatMagicians); // the great will print twice. to avoid this comment out line 25 and 26
