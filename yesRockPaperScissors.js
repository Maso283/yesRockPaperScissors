//console.log("Hello world!");

//Function that pulls a "random" number from 1 to 3
//Borrowed from Mozilla https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt() {
  min = Math.ceil(1);
  max = Math.floor(4);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//"playerChoice"
function playerChoice() {
	let select = prompt("Rock, paper, or scissors?") //Needs to be case insensitive
	return select;

}

//"computerChoice" OK
function computerChoice() {
	//computerSelection = A random number picked out of a list of three
	
	/*
	rock = 1;
	paper = 2;
	scissors = 3;
	*/

	//Setup a variable to catch the computer number and turn it into one of the three options
	let choice;

	//Computer pulls a random number from 1, 2, and 3, to decide.
	computer = getRandomInt();
	
	//Now we test the results with an "if" statement
	if (computer === 1) {
		choice = "rock";
	} else if (computer === 2) {
		choice = "paper";
	} else if (computer === 3) {
		choice = "scissors";
	}


	//OK
	return choice

}

//"Play round" function
function playRound(playerSelection, computerSelection) {



}

//"game function"
function game() {

	//Welcome/test alert
	alert("Welcome to Rock Paper Scissors!");

	//Game asks for player selection (MUST be Rock, Paper, or Scissors)
	//Best make it case-insensitive
	player = playerSelection();

	//Computer plays
	computer = computerChoice();

	console.log(player, computer)



	//initializes the playerSelection prompt

}

//game();




//console.log(computerChoice());
console.log(playerChoice());




//Math.random testing ground
/*function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}*/

