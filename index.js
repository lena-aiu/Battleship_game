// ## Step 1: Create Players
var shipNum = "4";


let playerOne = {
  name: prompt("playerOne - What is your first name?"),
  shipCount: parseInt(shipNum),
  gameBoard: [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ]
}

let playerTwo = {
  name: prompt("playerTwo - What is your first name?"),
  shipCount: parseInt(shipNum),
  gameBoard: [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ]
}

//function adding ships on the board

const addShips = (player) => {
let shipPlacePlayer = 0;

	for (var i = 0; i < 4; i++) {

	 let xCoordinate = Math.floor( Math.random() * (3 - 0 + 1) + 0);
	 let yCoordinate = Math.floor( Math.random() * (3 - 0 + 1) + 0);

	 console.log (xCoordinate, yCoordinate);

	 if (player.gameBoard[xCoordinate][yCoordinate] === 0) {
		player.gameBoard[xCoordinate][yCoordinate] = 1;
		shipPlacePlayer +=1;
	 } 
	}
//	return player.gameBoard;
}

//## Step 2: Randomly Add Ships to each Board

addShips(playerOne);
console.log (JSON.stringify(playerOne.gameBoard));

addShips(playerTwo);
console.log (JSON.stringify(playerTwo.gameBoard));

// show info in objects : PlayerOne and PlayerTwo
console.log(playerOne, playerTwo);

//## Step 3: Start the Game Play

let continueGame;
let message;
let currentPlayer = playerOne;
let opponent = playerTwo;

// choose the begginer
let choice = Math.floor(Math.random() * (2 - 1 + 1) + 1);
if (choice !== 1) {
  currentPlayer = playerTwo;
  opponent = playerOne;
}

// function defining whose turn

const battleship = () => {

while (!message) {  

//  if (currentPlayer === playerOne.name ) {

//    ### Step 3a: Ask the PlayerOne to Choose Strike Coordinates

    let xCoordinateStrike = +prompt(`${currentPlayer.name}, please choose an X coordinate to strike from 0 to 3`);
    let yCoordinateStrike = +prompt(`${currentPlayer.name}, please choose an Y coordinate to strike from 0 to 3`);

 // ### Step 3b: Determine if the Player Sink their Opponent's Ship
 // if the guesing coordinate is right, change the value from 1 to 0 and decrement the ship count

    if (opponent.gameBoard[xCoordinateStrike][yCoordinateStrike] === 1) {
          opponent.gameBoard[xCoordinateStrike][yCoordinateStrike] = 0;
          opponent.shipCount -=1;
// show info in object : PlayerTwo
          console.log(opponent.name);
          console.log (JSON.stringify(opponent.gameBoard));
          alert("Hint!");

// ### Step 3c: Check if the Opponent has Any Ships Left  
// if the guessing coordinate wrong, ask question and switch the players between each other 

	} else {
      alert("Miss!");
// confirm the continue of game    
       continueGame = confirm("Would you like to continue?");
        if (!continueGame) {
         alert ("Stop Game");
         return `Stop Game by ${currentPlayer.name}`;
       }
		[currentPlayer, opponent] = [opponent, currentPlayer]; 
    }

// ## Step 4: End the Game Play        
// if the PlayerTwo ship count is 0, then PlayerOne win

	   if (opponent.shipCount === 0) {
		message = currentPlayer.name;
		} 
}  
// show info in objects : PlayerOne and PlayerTwo
  console.log(playerOne, playerTwo);
  return `The winner is ${message}!`;
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
