/*(Coded by Maso283 on March 14th, 2021)*/

//Function that pulls a "random" number from 1 to 3
//Borrowed from Mozilla https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt() {
  min = Math.ceil(1);
  max = Math.floor(4);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive

}

// Function to make the computer wait before changing emojis
//Courtesy of Dr. Derek Austin at devgenius https://blog.devgenius.io/how-to-make-javascript-sleep-or-wait-d95d33c99909
function wait() {

  setTimeout(() => console.log("First"), 1000)
  setTimeout(() => console.log("Second"), 2000)
  setTimeout(() => console.log("Third"), 3000)
}

// Makes the "computer" choose a random number
function computerChoice() {

	//Setup a variable to catch the computer number and turn it into one of the three options
	let choice;

	//Computer pulls a random number from 1, 2, and 3, to decide.
	computer = getRandomInt();
	
	//Now we test the results with an "if" statement
	if (computer === 1) {
		choice = "rock";
		//toggle rock emoji with "div.classList.toggle('active')"
	} else if (computer === 2) {
		choice = "paper";
		//toggle paper emoji
	} else if (computer === 3) {
		choice = "scissors";
		//toggle scissors emoji
	}

	return choice

}


//--------------------------------------------------------------------------------------------------------------------------------

function playRock() {
	
    computerSelection = computerChoice();
    if (computerSelection == "rock") { //rock v rock
	  		alert(`DRAW!`);
	  		document.getElementById("computer").innerHTML = "😐";
	  		setTimeout(function(){
	  			document.getElementById("computer").innerHTML = "😜"
	  		}, 3000);
	  		
	  		 }
	  		else if (computerSelection == "paper") { //rock v paper
	  			alert(`LOSE! Paper covers rock!`);
	  			document.getElementById("computer").innerHTML = "😁";

	  		  setTimeout(function(){
	  			document.getElementById("computer").innerHTML = "😜"
	  		}, 3000); 
	  			//return point to computer;
	  		}
	  			else if (computerSelection == "scissors") { //rock v scissors
	  				alert(`WIN! Rock CRUSHES scissors!`);
	  				document.getElementById("computer").innerHTML = "😤";
	  		    setTimeout(function(){
	  			  document.getElementById("computer").innerHTML = "😜"
	  		}, 3000);
	  				//return point to player
	  		}

};


function playPaper() {

  if (computerSelection == "rock") { //paper v rock
			alert(`WIN! Paper covers rock!`);
			
			}
			else if (computerSelection == "paper") { //paper v paper
				alert(`DRAW`); 
				
			}
				else if (computerSelection == "scissors") { //paper v scissors
					alert(`LOSE! Scissors cut paper!`);
					
      }
};


function playScissors() {

  if (computerSelection == "rock") { //scissors v rock
			alert(`LOSE! Rock CRUSHES scissors!`);
			
			 }
			else if (computerSelection == "paper") { //scissors v paper
				alert(`WIN! Scissors cut paper!`); 
				
			}
				else if (computerSelection == "scissors") { //scissors v scissors
					alert(`DRAW!`);
					
				}
};





/* ^^^^^^ SUPPORTING FUNCTIONS AREA ABOVE ^^^^^ */




//"game function"
function game() {

  //Event Listeners
	const computerContainer = document.querySelector('#computer');
  const messages = document.querySelector('#messagebox');
  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');

  let playerScore = 0;
	let computerScore = 0;
	let tally = 0;

  rock.addEventListener('click', playRock);
  paper.addEventListener('click', playPaper);
  scissors.addEventListener('click', playScissors);


	};



//Starts the game
game();

