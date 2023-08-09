//Muhammad Akif 
//12 July 2023
/* Exercise 22 */

let numbers = ["1","2","3","4","5"]

try{
    let invalidNumber = numbers[10]
    if (invalidNumber === undefined){
        throw new Error("Index out of range")
    }
} catch (error) {
    console.log("An index error occurred: " + error)

    //Correct the error by setting a valid index
    let validNumber = numbers[2]
    console.log("Corrected the error. Valid Number: " + validNumber)
}
console.log("Program will continue to execute after the error.")