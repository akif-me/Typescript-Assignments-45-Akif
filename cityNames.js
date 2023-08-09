"use strict";
//Muhammad Akif 
//12 July 2023
/* Exercise 39 */
function toTitleCase(text) {
    return text.replace(/\b\w/g, (char) => char.toUpperCase());
}
function city_country(city, country) {
    return `${toTitleCase(city)}, ${toTitleCase(country)}`;
}
console.log(city_country("karachi", "pakistan"));
console.log(city_country("new york", "america"));
console.log(city_country("istanbul", "turkey"));
