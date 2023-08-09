//Muhammad Akif 
//12 July 2023
/* Exercise 45 */

type Car = {
    manufacturer: string
    model: string
    [key: string]: any
}

function createCar(manufacturer: string, model: string, ...options: any[]){
    const obj: Car = {
        manufacturer: manufacturer, 
        model: model
    }

    options.forEach((key, index) => {
        if (index % 2 === 0 && options[index + 1] !== undefined){
            obj[key] = options[index + 1]
        }
    })

    return obj

    // for (let i = 0; i < options.length; i += 2){
    //     const key = options[i]
    //     const value = options[i+1]

    //     if (value !== undefined){
    //         obj[key] = value 
    //     }
    // }
}

const carInfo = createCar('Daihatsu', 'Mira', 'color', 'white', 'features', ['retractable mirrors', 'AC'])
console.log(carInfo)