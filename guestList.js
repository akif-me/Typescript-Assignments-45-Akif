"use strict";
//Muhammad Akif 
//13 July 2023
/* Exercise 14, 15, 16, 17 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.newGuestsList = void 0;
const guestsList = ["Osama", "Daniyal", "Nihal"];
guestsList.forEach((guest) => {
    console.log(`Dear ${guest}, I would like to invite you to my dinner party tonight at 9pm, looking forward to meeting you there.`);
});
const unableToAttend = guestsList.pop();
const newGuest = "Meraj";
console.log(`${unableToAttend} is unable to attend.`);
guestsList.push(newGuest);
guestsList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to my special dinner party at 9pm.`);
});
console.log(`Hi ${guestsList}, I wanted to inform you that I found a bigger dinner table.`);
guestsList.unshift("Kamran");
guestsList.splice(Math.floor(guestsList.length / 2), 0, `Haqqi`);
guestsList.push(`Rehan`);
guestsList.forEach((guest) => {
    console.log(`You are invited to my dinner party dear ${guest}`);
});
//17
console.log("I apologize but I will not be able to invite more than 2 people.");
while (guestsList.length > 2) {
    const removedGuest = guestsList.pop();
    console.log(`Dear ${removedGuest}, I am sorry but there is a change of plan. I will reschedule the dinner for you later.`);
}
guestsList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to my 2 people dinner table.`);
});
while (guestsList.length = 0) {
    guestsList.pop();
}
console.log(`There are ${guestsList.length} guests in the list`);
//For use in Exercise 19
let myGuestList = ["Abdul Wahid", "Rehan", "Daniyal"];
exports.newGuestsList = myGuestList;
