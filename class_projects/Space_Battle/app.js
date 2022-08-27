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
let alienShip = new Alien("Alien1")  
let alienShip2 = new Alien("Alien2")
let alienShip3 = new Alien("Alien3")
let alienShip4 = new Alien("Alien4")
let alienShip5 = new Alien("Alien5")
let alienShip6 = new Alien("Alien6")


//Got help with adding an array to store all alien ships. All ships are stored under "alienFleet"
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

/* Objects now need an attack method. need to figure out how to attack using firepower, hull, and accuracy
-trying to create a function that uses the battleships firepower to damage the alienships
-have to figure out how to go check first array, then second and etc
-battle each ship 1v1 then move to next ship in the array 
*/

function battle () {
    for (let i = 0; i < alienFleet.length; i++) {
        if (battleShip.firepower >= alienFleet[i].hull && alienFleet[i].hull >= 0) {
            console.log(battleShip.firepower - alienFleet[i].hull) 
            let damage = battleShip.firepower - alienFleet[i].hull
            console.log(alienFleet[i].hull, 'Before')
            alienFleet[i].hull = alienFleet[i].hull - damage
            let input = prompt('Fire Again?')                           // attempting to create a prompt that will pause after a alien ship has been damaged/destroyed ex: "yes or no"
            console.log(input)              //assign new variable for damage done. give prompt to continue to next ship 
        } else if (battleShip.firepower < alienFleet[i].hull >= 0) {  // After we have attacked, if alienShip has not been destroyed then they now attack back. 
            console.log(battleShip.firepower - alienFleet[i].hull)
        } else {
            console.log("you lost. " + "Try again")
        } 
    }
}
battle();

  
  