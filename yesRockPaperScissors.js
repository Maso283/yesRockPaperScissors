//Function that pulls a "random" number from 1 to 3
//Borrowed from Mozilla https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt() {
  min = Math.ceil(1);
  max = Math.floor(4);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive

}

//--------------------------------------------------------------------------------------------------------------------------------

//"playerChoice" (Could be expanded upon with a check to see if the player entered it in right)
function playerChoice() {
	let selected = prompt("Rock, paper, or scissors?"); //Needs to be case insensitive
	
	//Selected is made lowercase
	choice = selected.toLowerCase(); 
	//function takes `selected`` and 

	return choice;

}

//--------------------------------------------------------------------------------------------------------------------------------

//"computerChoice" OK
function computerChoice() {

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

	return choice

}


//--------------------------------------------------------------------------------------------------------------------------------


//Top of "playRound" function
function playRound() {

	

	//Scoreboard variables
	let playerScore = 0
	let computerScore = 0
	let tally = 0


	while (tally < 5) {

	playerSelection = playerChoice();
	computerSelection = computerChoice();

	//Rock check begins
	if (playerSelection == "rock") {
		if (computerSelection == "rock") { //rock v rock
			alert(`DRAW!\nPlayer: ${playerSelection}\nComputer: ${computerSelection}`);
			//return nothing
			++tally;
			//return;
			 }
			else if (computerSelection == "paper") { //rock v paper
				alert(`LOSE! Paper covers rock!\nPlayer: ${playerSelection}\nComputer: ${computerSelection}`); 
				//gib point to Computer
				++computerScore
				++tally;
				//return;
			}
				else if (computerSelection == "scissors") { //rock v scissors
					alert(`WIN! Rock CRUSHES scissors!\nPlayer: ${playerSelection}\nComputer: ${computerSelection}`);
					//gib point to Player
					++playerScore 
					++tally;
					//return;
				}
			}
	//Rock check ends

	else

	//Paper check begins
	if (playerSelection == "paper") {
		if (computerSelection == "rock") { //paper v rock
			alert(`WIN! Paper covers rock!\nPlayer: ${playerSelection}\nComputer: ${computerSelection}`);
			//gib point to Player
			++playerScore
			++tally;
			//return;
			 }
			else if (computerSelection == "paper") { //paper v paper
				alert(`DRAW\nPlayer: ${playerSelection}\nComputer: ${computerSelection}`); 
				//return nothing
				++tally;
				//return;
			}
				else if (computerSelection == "scissors") { //paper v scissors
					alert(`LOSE! Scissors cut paper!\nPlayer: ${playerSelection}\nComputer: ${computerSelection}`);
					//gib point to Computer
					++computerScore
					++tally;
					//return; 
				}
			}
	//Paper check ends

	else

	//Scissors check begins
	if (playerSelection == "scissors") {
		if (computerSelection == "rock") { //scissors v rock
			alert(`LOSE! Rock CRUSHES scissors!\nPlayer: ${playerSelection}\nComputer: ${computerSelection}`);
			//gib point to Computer
			++computerScore
			++tally;
			//return;
			 }
			else if (computerSelection == "paper") { //scissors v paper
				alert(`WIN! Scissors cut paper!\nPlayer: ${playerSelection}\nComputer: ${computerSelection}`); 
				//gib point to Player
				++playerScore
				++tally;
				//return;
			}
				else if (computerSelection == "scissors") { //scissors v scissors
					alert(`DRAW!\nPlayer: ${playerSelection}\nComputer: ${computerSelection}`);
					//return nothing
					++tally;
					//return; 
				}
			}
	//Scissors check ends

		}
		//Bottom of the while loop

		//Scoreboard
		alert(`Rounds: ${tally}\nPlayer: ${playerScore}\nComputer: ${computerScore}`);

		if (playerScore > computerScore) {
			alert("You win, champ!");
		} else if (computerScore > playerScore) {
			alert("Better luck next time, tiger!");
		} else if (playerScore === computerScore) {
			alert("A tie! What a friggin' miracle.");
		}

	}
//Bottom of "playRound" function
	



/* ^^^^^^ SUPPORTING FUNCTIONS AREA ABOVE ^^^^^ */













//"game function"
function game() {

	//playSwitch
	playSwitch = true;

	//Welcome
	alert("Welcome to Rock Paper Scissors!");

	//Loop to keep the game going until the player decides to quit
	while (playSwitch == true) {

		playRound();
	
		//Takes user response and converts it to lowercase
		let playAgain = prompt("Want to play again? y/n");
		playAgain = playAgain.toLowerCase();

		if (playAgain == "n") {
			alert("Thanks for playing!");
			playSwitch = false;
		}

	}

		

}

//Starts the game
game();

