const buttons = document.querySelectorAll(".button");

const resetButton = document.querySelector("#restart");

resetButton.addEventListener("click", resetGame);

resetButton.disabled = true;

buttons.forEach(btn => btn.addEventListener("mouseenter", highlightButton));
buttons.forEach(btn => btn.addEventListener("mouseleave", unlightButton));
buttons.forEach(btn => btn.addEventListener("mousedown", clickButton));
buttons.forEach(btn => btn.addEventListener("mouseup", unclickButton));
buttons.forEach(btn => btn.addEventListener("click", playGame));

const playerScoreBoard = document.querySelector("#playpoints");
const computerScoreBoard = document.querySelector("#comppoints");


const message = document.querySelector(".message");

function highlightButton(e) {
    this.classList.add("highlight");
}

function unlightButton(e) {
    this.classList.remove("highlight");
}

function clickButton(e) {
    this.classList.add("clicking");

}

function unclickButton(e) {
    this.classList.remove("clicking");

}

function resetGame() {
    playerScoreBoard.textContent = 0;
    computerScoreBoard.textContent = 0;
    message.textContent = "New game"
    resetButton.disabled = true;

}

function computerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    let choiceString;

    switch (choice) {

        case 2:
            choiceString = 'paper';
            break;
        case 3:
            choiceString = 'scissors';
            break;
    }

    return choiceString;
}

function playGame(e) {


    playerScore = +playerScoreBoard.textContent;
    computerScore = +computerScoreBoard.textContent;

    if (playerScore == 5 || computerScore == 5) return;

    let playerHand = e.srcElement.id;
    let computerHand = computerChoice();

    
    let result = turn(computerHand, playerHand);

    if (result == 'player') {
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    } else if (result == 'computer') {
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    }

    if (playerScore == 5 || computerScore == 5) {
        message.textContent = `Game over! ${(computerScore > playerScore)? 'The computer ':'You '} won!`;
        resetButton.disabled = false;
    }

}

function turn(computerChoice, playerChoice) {
    switch (playerChoice) {
        case 'rock':
            if (computerChoice == 'paper') {
                message.textContent = 'Paper beats rock! Computer won!';
                return 'computer';
            } else if (computerChoice == 'scissors') {
                message.textContent = 'Rock breaks scissors! You won!';
                return 'player';
            } else {
                message.textContent = "Rock and rock! It's a tie!";
                return 'tie';
            }
        case 'paper':
            if (computerChoice == 'scissors') {
                message.textContent = 'Scissors beats paper! Computer won!';
                return 'computer';
            } else if (computerChoice == 'rock') {
                message.textContent = 'Paper wraps rock! You won!';
                return 'player';
            } else {
                message.textContent = "Paper and paper! It's a tie!";
                return 'tie';
            }
        case 'scissors':
            if (computerChoice == 'rock') {
                message.textContent = 'Rock breaks scissors! Computer won!';
                return 'computer';
            } else if (computerChoice == 'paper') {
                message.textContent = 'Scissors cuts paper! You won!';
                return 'player';
            } else {
                message.textContent = "Scissors and scissors! It's a tie!";
                return 'tie';
            }
        default:
            alert('Something went terrible wrong!');
            break;
    }
}