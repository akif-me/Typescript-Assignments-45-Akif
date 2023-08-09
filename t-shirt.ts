//Muhammad Akif 
//12 July 2023
/* Exercise 36,37 */

function make_shirt(size: string, message: string){
    console.log(`Your custom shirt will be of ${size} size and it will have "${message}" printed on it`)
}

make_shirt("small", "Stay Happy")

function make_new_shirt(size: string = "large", message: string = "I love TypeScript"){
    console.log(`You have ordered a ${size} size shirt with the message "${message}"`)
}

make_new_shirt()
make_new_shirt("medium")
make_new_shirt(undefined,"I love SwiftUI")