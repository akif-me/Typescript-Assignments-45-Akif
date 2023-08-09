//Muhammad Akif 
//12 July 2023
/* Exercise 3 */
var personName:string = "Ahmed";
console.log("Uppercase: ", personName.toUpperCase());
console.log("Lowercase: ", personName.toLowerCase());
console.log("Titlecase: ", personName.replace(/\b\w/g, (char) => char.toUpperCase()));
