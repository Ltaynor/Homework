//For loop 1-20

// for(let i = 0; i <= 20; i++){
//     console.log(i)
// }


// //for loop 0-200 all evens 

// for(let i = 0; i <= 200; i+= 2){
//     console.log(i)
// }

//numbers from 1-100
//number divisible by 3 log 'fizz'
//number divisible by 5 log 'buzz'
//number divisible by 3 & 5 log 'fizzbuzz'

// for(let i = 0; i <= 100; i++){
//     console.log(i++)
//     if(i % 3 == 0) {
//     console.log(i,'fizz')
//     }
//    else if(i % 5 == 0){
//         console.log(i, 'buzz')
//     }
    
// } 

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001 // changed age
wolfy[3] = "Gotham City" // changed yukon territory to Gotham City 
dart.push = "Hawkins" // using .push allows us to add an element to the end of an array 
wolfy[0] = "Gameboy" // changed index 0 to Gameboy 

console.log(plantee)
console.log(dart)
console.log(wolfy)


// Ninja turtles array

const ninjaTurtle = new Array('Donatello','Leonardo','Raphael','Michaelangelo')
console.log(ninjaTurtle)

for (let Raphael of ninjaTurtle) {
    console.log(Raphael.toUpperCase())  // when using the 'for of' loop, we are iterating the array from Donatello to Michaelangelo

} // when using the .toUpperCase with the loop we are capitalizing all letters for all elements 