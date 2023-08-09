"use strict";
//Muhammad Akif 
//12 July 2023
/* Exercise 38 */
function describe_city(city, country = "United States") {
    console.log(`${city} is in ${country}`);
}
describe_city("Islamabad", "Pakistan");
describe_city("New York", undefined);
describe_city("Washington", undefined);
