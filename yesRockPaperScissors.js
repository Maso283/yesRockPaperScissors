//console.log("Hello world!");

//Function that pulls a "random" number from 1 to 3
//Borrowed from Mozilla https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt() {
  min = Math.ceil(1);
  max = Math.floor(4);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//"playerChoice" (Could be expanded upon with a check to see if the player entered it in right)
function playerChoice() {
	let selected = prompt("Rock, paper, or scissors?"); //Needs to be case insensitive
	
	//Selected is made lowercase
	choice = selected.toLowerCase(); 
	//function takes `selected`` and 

	return choice;

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



//Top of "playRound" function
function playRound() {

	playerSelection = playerChoice();
	computerSelection = computerChoice();


	//Rock check begins
	if (playerSelection == "rock") {
		if (computerSelection == "rock") { //rock v rock
			alert("DRAW!"); }
			else if (computerSelection == "paper") { //rock v paper
				alert("LOSE! Paper covers rock!"); }
				else if (computerSelection == "scissors") { //rock v scissors
					alert("WIN! Rock CRUSHES scissors!"); 
				}
			}
	//Rock check ends

	else

	//Paper check begins
	if (playerSelection == "paper") {
		if (computerSelection == "rock") { //paper v rock
			alert("WIN! Paper covers rock!"); }
			else if (computerSelection == "paper") { //paper v paper
				alert("DRAW"); }
				else if (computerSelection == "scissors") { //paper v scissors
					alert("LOSE! Scissors cut paper!"); 
				}
			}
	//Paper check ends

	else

	//Scissors check begins
	if (playerSelection == "scissors") {
		if (computerSelection == "rock") { //scissors v rock
			alert("LOSE! Rock CRUSHES scissors!"); }
			else if (computerSelection == "paper") { //scissors v paper
				alert("WIN! Scissors cut paper!"); }
				else if (computerSelection == "scissors") { //scissors v scissors
					alert("DRAW!"); 
				}
			}
	//Scissors check ends



	}
//Bottom of "playRound" function
	



//"game function"
function game() {

	//Welcome/test alert
	alert("Welcome to Rock Paper Scissors!");

	//Establishes scores

	let playerScore = 0;
	let computerScore = 0;
	let rounds = 0


	while (rounds < 4) {
	playRound();
	}

	console.log(player, computer)



	//initializes the playerSelection prompt

}

//game();




//console.log(computerChoice());
console.log(playRound());




//Math.random testing ground
/*function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}*/

