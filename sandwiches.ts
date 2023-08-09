//Muhammad Akif 
//12 July 2023
/* Exercise 44 */

function itemsOnSandwich(items: string[]){
    console.log("Sandwich Summary:")
    if (items.length === 0){
        console.log('You ordered an empty sandwich')
    } else {
        console.log(`You sandwich consists of Bread + ` + items.join(" + "))
    }
    console.log('')
}

itemsOnSandwich(["Tomato", "Lettuce", "Mayo"])
itemsOnSandwich(["Beef Patty", "Lettuce", "Cheese"])
itemsOnSandwich([])