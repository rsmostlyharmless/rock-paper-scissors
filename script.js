let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("#score-board");
const result_div = document.querySelector("#result");
const restart_div = document.querySelector("#restart");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function selection(words) {
    if (words === "rock") return "Rock";
    if (words === "paper") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    if (userScore < 5){result_div.innerHTML = `${selection(userChoice)} beats ${selection(computerChoice)}. Player Wins!`;
    } else if(userScore === 5){
    result_div.innerHTML = "Game over, you win!"
    restart_div.innerHTML = "\nRefresh page fo play a new game.";

    rock_button.setAttribute("disabled", 1);
    paper_button.setAttribute("disabled", 1);
    scissors_button.setAttribute("disabled", 1);
    }
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    if (computerScore < 5){result_div.innerHTML = `${selection(userChoice)} does not beat ${selection(computerChoice)}. Computer Wins!`;
    } else if(computerScore === 5){
    result_div.innerHTML = "Game over, Computer wins!"
    restart_div.innerHTML = "\nRefresh page fo play a new game.";

    rock_button.setAttribute("disabled", 1);
    paper_button.setAttribute("disabled", 1);
    scissors_button.setAttribute("disabled", 1);
    }
}

function draw(userChoice, computerChoice) {
    result_div.innerHTML = `${selection(userChoice)} equals ${selection(computerChoice)}. It's a Draw!`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_button.addEventListener('click', function() {
        game("rock");
    })

    paper_button.addEventListener('click', function() {
        game("paper");
    })

    scissors_button.addEventListener('click', function() {
        game("scissors");
    })
}

main();


/* Original script. A mix of my code and help from a few google searches. 

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

let i = 0;
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
*/


