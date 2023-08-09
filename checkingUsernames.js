"use strict";
//Muhammad Akif 
//12 July 2023
/* Exercise 32 */
let current_users = ["A", "B", "C", "D", "E"];
let new_users = ["Z", "I", "b", "C", "L", "P"];
for (let nUser of new_users) {
    let isTaken = current_users.some((cUser) => cUser.toLowerCase() === nUser.toLowerCase());
    if (isTaken) {
        console.log(`Username ${nUser} is not available 🔴. Please try a new username.`);
    }
    else {
        console.log(`Username ${nUser} is available 🟢.`);
    }
}
