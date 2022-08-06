function computerPlay() {
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
            return '';
    }
}

function turn(computerChoice, playerChoice) {

}

function playGame(n=5) {

}

playGame();