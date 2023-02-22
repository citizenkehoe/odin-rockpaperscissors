function textWin(x,y) {
    return `${x} beats ${y}; you win!`;
}

function textLose(x,y) {
    return `${x} beats ${y}; you lose!`;
}

function textTie(x) {
    return `You both chose ${x}; try again.`;
}


// on button press


// determine outcome


// increase round counter
let round = 0;
function currentRound() {
    round += 1;
    console.log(round);
    // document.getElementById('round-count').textContent = round;
    return round;
}

// capture player choice
function getPlayerChoice() {
    let playerChoice = this.getAttribute('data-choice');
    return playerChoice;
}

// create computer choice
let choice;
function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3) + 1;
    switch (randInt) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    return choice;
}

// compare values
function playGame(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return "tie";
                    break;
                case "paper":
                    return "lose";
                    break;
                case "scissors":
                    return "win";
                    break;
            };
            break;
        case "paper":
            switch (computerSelection) {
                case "paper":
                    return "tie";
                    break;
                case "scissors":
                    return "lose";
                    break;
                case "rock":
                    return "win";
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "scissors":
                    return "tie";
                    break;
                case "rock":
                    return "lose";
                    break;
                case "paper":
                    return "win";
                    break;
            }
            break;
    }
}

function makeRoundSummary() {
    const newRound = document.createElement('div');
    newRound.innerHTML = `<p>Round ${round}:</p><p>You chose CHOICE</p><p>Computer chose ${choice}</p><p>THE RESULT</p>`;
    document.getElementById('play-history').appendChild(newRound);
}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', currentRound);
    button.addEventListener('click', getComputerChoice);
    button.addEventListener('click', makeRoundSummary);
});