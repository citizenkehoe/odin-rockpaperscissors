function textWin(x,y) {
    return `${x} beats ${y}; you win!`;
}

function textLose(x,y) {
    return `${x} beats ${y}; you lose!`;
}

function textTie(x) {
    return `You both chose ${x}; try again.`;
}


let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let playerScoreHole = document.getElementById('player-hole');
let compScoreHole = document.getElementById('comp-hole');
let result;

// on button press


// determine outcome


// increase round counter
let round = 0;
function currentRound() {
    round += 1;
    // console.log(round);
    return round;
}

// capture player choice
function getPlayerChoice() {
    playerChoice = this.getAttribute('data-choice');
    return playerChoice;
}

// create computer choice
function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3) + 1;
    switch (randInt) {
        case 1:
            computerChoice = "🪨";
            break;
        case 2:
            computerChoice = "📃";
            break;
        case 3:
            computerChoice = "✂️";
            break;
    }
    return computerChoice;
}

// point-scoring logic
function score(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreHole.textContent = playerScore;
        result = "+1 to player";
    } else if (winner === 'computer') {
        computerScore++;
        compScoreHole.textContent = computerScore;
        result = "+1 to computer";
    } else if (winner === 'tie') {
        result = "A tie!"
    }
}

// compare values
function playGame() {
    switch (playerChoice) {
        case "🪨":
            switch (computerChoice) {
                case "🪨": // tie
                    score('tie');
                    break;
                case "📃": // comp win
                    score('computer');
                    break;
                case "✂️": // player win
                    score('player');
                    break;
            };
            break;
        case "📃":
            switch (computerChoice) {
                case "📃": // tie
                    score('tie');    
                    break;
                case "✂️": // comp win
                    score('computer');
                    break;
                case "🪨": // player win
                    score('player');
                    break;
            }
            break;
        case "✂️":
            switch (computerChoice) {
                case "✂️": // tie
                    score('tie');    
                    break;
                case "🪨": // comp win
                    score('computer');
                    break;
                case "📃": // player win
                    score('player');
                    break;
            }
            break;
    }
}

function makeRoundSummary() {
    const newRound = document.createElement('div');
    newRound.innerHTML = `<p class="make-red">Round ${round}</p><p>You chose ${playerChoice}</p><p>Computer chose ${computerChoice}</p><p>${result}</p>`;
    document.getElementById('play-history').appendChild(newRound);
}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', currentRound);
    button.addEventListener('click', getPlayerChoice);
    button.addEventListener('click', getComputerChoice);
    button.addEventListener('click', playGame);
    button.addEventListener('click', makeRoundSummary);
});