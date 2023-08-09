//Muhammad Akif 
//12 July 2023
/* Exercise 25, 26, 27 */

let alienColor = "green"

if (alienColor == "green"){
    console.log("Alien's color is green. You just earned 5 points.")
}
if (alienColor == "green"){
    console.log("Alien's color is not green")
}

//26
alienColor = "red"

if (alienColor == "green"){
    console.log("Alien's color is green. You just earned 5 points.")
}else{
    console.log("Alien's color is not green. You just earned 10 points.")
}

//27

let alienColorArray = ["green", "yellow", "red"]

for (let alienColor of alienColorArray){
    if (alienColor == 'green') {
        console.log("Congratulations! You just earned 5 points for shooting down a green alien.");
      } else if (alienColor == 'yellow') {
        console.log("Congratulations! You just earned 10 points for shooting down a yellow alien.");
      } else if (alienColor == 'red') {
        console.log("Congratulations! You just earned 15 points for shooting down a red alien.");
      } else {
        console.log("Invalid alien color.");
      }
}
