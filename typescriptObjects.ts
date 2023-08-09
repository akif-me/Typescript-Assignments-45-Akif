//Muhammad Akif 
//12 July 2023
/* Exercise 21 */

interface Country {
    name: string
    capital: string
    language: string
}

const countries: Country[] = [
    {
        name: "US",
        capital: "Washington",
        language: "English"
    },
    {
        name: "UK",
        capital: "London",
        language: "English"
    },
    {
        name: "Canada",
        capital: "Otawa",
        language: "English"
    }
]

console.log("List of Countries:\n")
countries.forEach((country, index)=> {
    console.log(`Country ${index + 1}`)
    console.log(`Name: ${country.name}`)
    console.log(`Capital: ${country.capital}`)
    console.log(`Name: ${country.language} \n`)
})