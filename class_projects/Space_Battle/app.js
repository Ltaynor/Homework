/*
-Captain of USS Schwarzenegger
-On mission to destroy every last alien ship 
- 6 alien ships 
Alien ships are "Too Logical" and attack one at a time 
- They wait to see the outcome of one battle before deploying another ship

-My Ships Strength:
    Able to attack first
- Weaknesses:
    Lasers are not auto-targeting 
    can only attack aliens in order

Game Rounds: 
    1. Attack first
        if the alien ship survive 
            Then they attack you
        if I survive
            Then I attack back 
    2. If I win
        Get choice whether to 
            A. Attack next ship
            B. Retreat (Game over)            
            
Ship Properties {
    Hull:20
    Fire power: 5

}   

Alien Ship properties {
    Hull: between 3-6
    Firepower: needs to be between 2-4
    Accuracy: needs to be between .6-.8
}

**Hull is your battle health; if it reaches 0 then you die and visa versa 
**Firepower is the amount of damage done to the hull 
**accuracy** is the chance between 0 and 1 that the ship will hit its target.
Every time the ship will attack, calculate the chance that the damage will hit the opposing ship using `Math.random()`
If the ship's accuracy is `0.8` - then if the number generated from `Math.random()` is less than or equal to `0.8` then the attack will be successful.
If the value is greater than `0.8` then the attack has missed.
- Adjust the accuracy based on the specs for each ship
WIN - Destroy all Ships 
LOSE - Get destroyed 
*/




//Creating game characters, starting with my ship. I used class/construtor to create a ship and alien
// objects, then followed notes on how to properly access this class using "let Ship = new BattleShip "

class Ship {
    constructor(name, hull, accuracy, firepower) {
        this.name = name;
        this.accuracy = accuracy;
        this.hull = hull;
        this.firepower = firepower;
    }
}
 


class Alien {
    constructor(name) {
        this.name = name;
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }

}






let battleShip = new Ship("USS Schwarzenegger", 20, .7, 5)
let alienShip = new Alien("Alien1") // not currently understanding math.random so setting params until I figure it out. 
let alienShip2 = new Alien("Alien2")
let alienShip3 = new Alien("Alien3")
let alienShip4 = new Alien("Alien4")
let alienShip5 = new Alien("Alien5")
let alienShip6 = new Alien("Alien6")

const alienFleet = [];
alienFleet.push(
    alienShip,
    alienShip2,
    alienShip3,
    alienShip4,
    alienShip5,
    alienShip6

);

console.log(battleShip); // just to make sure that I was moving in the right direction 
console.log(alienFleet);

// Objects now need an attack method. need to figure out how to attack using firepower, hull, and accuracy


function battle () {
    for (let i = 0; i < alienFleet.length; i++) {
        
        
    }
}
battle();


// // always capitalize the first letter of a class
// // that is what indicates to the developer it's a class
// // developers when they see a capital name think of a class
// class Vehicle { // defining a class
//     constructor(colorParam, numberOfTiresParam, yearParam) { // constructor is a special function to add info to your class/object instantiaion
//       this.objectColor = colorParam;
//       this.objectNumberOfTires = numberOfTiresParam;
//       this.objectYear = yearParam;
//     }
//   }
//   // use a class || instantiate an object
//   // instantiate object = create object from class
//   // use new keyword
//   const v1 = new Vehicle('red', 4, '2020');
//   console.log(v1);
//   const v2 = new Vehicle('blue', 2, '2000');
//   console.log(v2);
//   /*
//   creating a class for a human
//   hair color
//   eye color
//   height
//   age
//   name
//   */
//   class Human {
//     constructor(eyeColor, hairColor, height, age, name) { // constructor method that accepts params
//       this.eyeColor = eyeColor;
//       this.hairColor = hairColor;
//       this.height = height;
//       this.age = age;
//       this.name = name;
//     }
//     // this is a method. It's like a function. But specifically inside of a class
//     // you could take params with a method too. But in here we're choosing not to
//     introduction() {
//       // 'this' represents the entirety of the object
//       console.log('Hello! My name is ' + this.name);
//     }
//   // getters and setters
//     getEyeColor() {
//       return this.eyeColor;
//     }
//   setEyeColor(eyeColor) {
//       this.eyeColor = eyeColor;
//     }
//   getHairColor() {
//       return this.hairColor;
//     }
//   setHairColor(hairColor) {
//       this.hairColor = hairColor;
//     }
//   }
//   const person = new Human('Green', 'Blonde', 5, 30, 'June');
//   const person1 = new Human('Blue', 'black', 6, 23, 'Jacob');
//   // console.log(person);
//   person.introduction(); // => 'Hello! My name is ' + June
//   person1.introduction(); // => 'Hello! My name is ' + Jacob
//   /*
//   {
//     'brown'
//     'brown'
//     "6'11"
//     27
//     'bruce'
//   }
//   */
//   class Gladiator {
//     constructor(name, weapon) {
//       this.name = name;
//       this.weapon = weapon;
//     }
//   }
//   const testGladiator = new Gladiator('Angel', 'Spear');
//   console.log(testGladiator);
  
  