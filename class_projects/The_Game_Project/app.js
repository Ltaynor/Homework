console.log('Welcome to my new game')

/* Game - Rock paper scissors 

Game Rules

A classic two-person game. Players start each round by saying, “rock, paper, scissors, shoot!” On “shoot,” each player holds out their fist for rock, flat hand for paper, or their index and middle finger for scissors. Rock crushes scissors, scissors cut paper, and paper covers rock. See who wins each round!

You win when you beat your opponent 2/3 times 

Need to Use: 

Objects or an Array (unsure which yet ) 
Rock
Paper 
Scissors 

Rock > Scissors
Paper > Rock
Scissors > paper 
Tie = Redo 

Players (Possible Objects within JavaScript ): 
You
The Computer 

Winner will win 2/3 times 
Loser will not 

How the game will work:

Chose between 3 options, either Rock, paper or scissors before starting countdown 
Simultaneous countdown "3-2-1-SHOOT" between both parties
Better object chosen will win 
Can play best of 3 or best of 5 
At the end the game will state whether "You Win" or "You Lose"
*/


// Starting with creating the characters Player 1 and computer player 

const playerOne = document.querySelector("#player-1-container")
const computerOne = document.querySelector("#computer-container")
const gameChoices = ['rock', 'paper', 'scissors'];
const pickChoice = document.querySelector(".options")  // changed names in 'index' to options so that i could connect all 3 options 



// adding an event listener that should be able to click on the buttons 
//also connecting the 'playerone' to my html so that when I click a certain button, it renders 
pickChoice.foreach(button => button.addeventlistener("click", () => {

button.textContent;  // found on mozilla for connecting player one to his decisions https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent


}))

// need to figure out how to get button to click, need to also add math.random function for computer player 


