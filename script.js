function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    switch(random) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            return lose;
        } else if (computerSelection === "rock") {
            return tie;
        } else {
            userScore++;
            return win;
        }
    }

    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            userScore++;
            return win;
        } else if (computerSelection === "rock") {
            computerScore++;
            return lose;
        } else {
            return tie;
        }
    }

    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "paper") {
            return tie;
        } else if (computerSelection === "rock") {
            userScore++;
            return win;
        } else {
            computerScore++;
            return lose;
        }
    }
}


let userScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win"
let lose = "You lose"
let tie = "It is a tie"

var i = 0;
const play = () => {
    let playerSelection = prompt("Pick a move");
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
    i++;
    if (i !== 5) {
        play();
    } else {
        alert("Game Over: User("+userScore+") vs Computer ("+computerScore+")");
    }
}

play();


/*const playerSelection = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        return 'Not an option!';
    }
}*/



/*const computerSelection = () => {
    let compAnswer = Math.floor(Math.random() * 3);
    switch(compAnswer) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}*/

/*const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 'Draw';
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'Computer wins this round';
        } else {
            return 'Player wins this round';
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'Computer wins this round';
        } else {
            return 'Player wins this round';
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'Computer wins this round';
        } else {
            return 'Player wins this round';
        }
    }  
}*/

/*const playGame = () => {

let userScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win"
let lose = "You lose"
let tie = "It is a tie"

for (let i = 0; i < 5; i++) {
    const player = playerSelection('rock');
    const computer = computerSelection();
    console.log('Player threw: ' + player);
    console.log('The computer threw: ' + computer);

    console.log(playRound((player, computer)));
}*/

/*function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'Computer wins this round';
    } else if (playerSelection === 'Scissors' && (computerSelection === 'Rock')) {
        return 'Computer wins this round';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'Computer wins this round';
    } else {
        return 'Player wins this round';
    }
}*/


//console.log(playRound('paper', ''));
