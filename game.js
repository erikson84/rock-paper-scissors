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

function playerChoice() {
    let choice = prompt("Rock, paper or scissors?\n(Or press 'Cancel' to stop)");
    if (choice == null) {
        alert("Thank you for playing!");
        return choice;
    } else {
        choice = choice.toLowerCase();
    }
    switch (choice) {
        case 'rock':
        case 'paper':
        case 'scissors':
            return choice;
        
        default:
            alert("Please choose a valid option");
            return playerChoice();
    }
}

function turn(computerChoice, playerChoice) {
    switch (playerChoice) {
        case 'rock':
            if (computerChoice == 'paper') {
                alert('Paper beats rock! Computer won!');
                return 'computer';
            } else if (computerChoice == 'scissors') {
                alert('Rock breaks scissors! You won!');
                return 'player';
            } else {
                alert("It's a tie!");
                return 'tie';
            }
        case 'paper':
            if (computerChoice == 'scissors') {
                alert('Scissors beats paper! Computer won!');
                return 'computer';
            } else if (computerChoice == 'rock') {
                alert('Paper wraps rock! You won!');
                return 'player';
            } else {
                alert("It's a tie!");
                return 'tie';
            }
        case 'scissors':
            if (computerChoice == 'rock') {
                alert('Rock breaks scissors! Computer won!');
                return 'computer';
            } else if (computerChoice == 'paper') {
                alert('Scissors cut paper! You won!');
                return 'player';
            } else {
                alert("It's a tie!");
                return 'tie';
            }
        default:
            alert('Something went terrible wrong!');
            break;
    }
}

function playGame(n=5) {
    let computerScore = 0;
    let playerScore = 0;

    for (let g=0; g < n; g++) {
        let playerHand = playerChoice();

        if (playerHand == null) {
            alert(`Game cancelled.\nFinal score\nComputer: ${computerScore} vs ${playerScore}: Player`);
            return;
        }

        let computerHand = computerChoice();

        result = turn(computerHand, playerHand);

        if (result == 'player') {
            playerScore++;
        } else if (result == 'computer') {
            computerScore++;
        }

        if (playerScore > Math.floor(n/2) || computerScore > Math.floor(n/2)) break;
    }

    alert(`Game over! ${(computerScore > playerScore)? 'The computer ':'You '} won!\nFinal Score\nComputer: ${computerScore} vs ${playerScore}: Player`);

}

playGame();