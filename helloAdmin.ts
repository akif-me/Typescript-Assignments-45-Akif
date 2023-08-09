//Muhammad Akif 
//12 July 2023
/* Exercise 30 */

let usernames: string[] = ['admin', 'Ali', 'Akif', 'Usman', 'Saqib'];

for (let username of usernames) {
  if (username === 'admin') {
    console.log(`Hello admin, would you like to see a status report?`);
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}