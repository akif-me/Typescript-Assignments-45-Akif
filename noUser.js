"use strict";
//Muhammad Akif 
//12 July 2023
/* Exercise 31 */
let userName = ['admin', 'Ali', 'Akif', 'Usman', 'Saqib'];
for (let user of userName) {
    if (user === 'admin') {
        console.log(`Hello admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}
function checkIfUserNameIsEmpty() {
    if (!userName.length) {
        console.log("User Name Array is empty");
    }
    else {
        console.log("User Name Array is not empty");
    }
}
checkIfUserNameIsEmpty();
userName.splice(0, userName.length);
checkIfUserNameIsEmpty();
