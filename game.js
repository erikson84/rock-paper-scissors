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

function playerChoice(choice) {

}

function turn(computerChoice, playerChoice) {

}

function playGame(n=5) {

}

playGame();