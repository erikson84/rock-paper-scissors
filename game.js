const buttons = document.querySelectorAll(".button");

const resetButton = document.querySelector("#restart");

resetButton.addEventListener("click", resetGame);

resetButton.disabled = true;

buttons.forEach(btn => btn.addEventListener("click", playGame));

const playerScoreBoard = document.querySelector("#playpoints");
const computerScoreBoard = document.querySelector("#comppoints");


const message = document.querySelector(".message");

function resetGame() {
    playerScoreBoard.textContent = 0;
    computerScoreBoard.textContent = 0;
    message.textContent = "๐ ๐งป โ";
    resetButton.disabled = true;

}

function computerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    let choiceString;

    switch (choice) {
        case 1:
            choiceString = 'rock';
            break;
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


    let playerScore = +playerScoreBoard.textContent;
    let computerScore = +computerScoreBoard.textContent;

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
        message.textContent = `๐ ๐งป โ Game over! ${(computerScore > playerScore)? 'The computer ':'You '} won! ๐ ๐งป โ`;
        resetButton.disabled = false;
    }

}

function turn(computerChoice, playerChoice) {
    switch (playerChoice) {
        case 'rock':
            if (computerChoice == 'paper') {
                message.textContent = '๐งป Paper beats rock ๐! Computer won!';
                return 'computer';
            } else if (computerChoice == 'scissors') {
                message.textContent = '๐ Rock breaks scissors โ! You won!';
                return 'player';
            } else {
                message.textContent = "๐ Rock and rock ๐! It's a tie!";
                return 'tie';
            }
        case 'paper':
            if (computerChoice == 'scissors') {
                message.textContent = 'โ Scissors beats paper ๐งป! Computer won!';
                return 'computer';
            } else if (computerChoice == 'rock') {
                message.textContent = '๐งป Paper wraps rock ๐! You won!';
                return 'player';
            } else {
                message.textContent = "๐งป Paper and paper ๐งป! It's a tie!";
                return 'tie';
            }
        case 'scissors':
            if (computerChoice == 'rock') {
                message.textContent = '๐ Rock breaks scissors โ! Computer won!';
                return 'computer';
            } else if (computerChoice == 'paper') {
                message.textContent = 'โ Scissors cuts paper ๐งป! You won!';
                return 'player';
            } else {
                message.textContent = "โ Scissors and scissors โ! It's a tie!";
                return 'tie';
            }
        default:
            alert('Something went terrible wrong!');
            break;
    }
}