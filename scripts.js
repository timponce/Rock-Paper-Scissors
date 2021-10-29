const playerCurrentScore = document.querySelector('.playerCurrentScore');
const playerScoreBoard = document.querySelector('.playerScoreBoard');
const playerSelections = document.querySelector('.playerSelections');
const computerSelections = document.querySelector('.computerSelections')
const computerScoreBoard = document.querySelector('.computerScoreBoard')
const computerCurrentScore = document.querySelector('.computerCurrentScore');
const selectionButtons = document.querySelectorAll('[data-selection]');

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

const options = ['rock', 'paper', 'scissors'];
const computerPlay = (options) => {
    return options[Math.floor(Math.random() * options.length)];
};
console.log(computerPlay(options));

const playRound = (selection) => {
    let computerSelection = computerPlay(options);
    if (selection === computerSelection) {
        roundTie();
        console.log('tie');
    } else if ((selection === 'rock' && computerSelection === 'scissors') ||
                (selection === 'paper' && computerSelection === 'rock') ||
                (selection === 'scissors' && computerSelection === 'paper')) {
        roundWin();
        playerScore++;
        updateScore();
    } else {
        roundLose();
        computerScore++;
        updateScore();
    }
    const computerChoice = document.createElement('p');
    computerChoice.textContent = computerSelection;
    computerSelections.appendChild(computerChoice);
}

const updateScore = () => {
    playerCurrentScore.textContent = playerScore;
    computerCurrentScore.textContent = computerScore;
    if (playerScore === 3) {
        alert('You win');
        restartGame();
    } else if (computerScore === 3) {
        alert('You lose');
        restartGame();
    }
}

const restartGame = () => {
    let playerScore = 0;
    playerCurrentScore.textContent = 0;
    let computerScore = 0;
    computerCurrentScore.textContent = 0;

}

const roundTie = () => {
    const playerRoundScore = document.createElement('p');
    playerRoundScore.textContent = '0';
    playerScoreBoard.appendChild(playerRoundScore);
    const computerRoundScore = document.createElement('p');
    computerRoundScore.textContent = '0';
    computerScoreBoard.appendChild(computerRoundScore);
}

const roundWin = () => {
    const playerRoundScore = document.createElement('p');
    playerRoundScore.classList.add('green');
    playerRoundScore.textContent = '+ 1';
    playerScoreBoard.appendChild(playerRoundScore);
    const computerRoundScore = document.createElement('p');
    computerRoundScore.classList.add('red');
    computerRoundScore.textContent = '- 1';
    computerScoreBoard.appendChild(computerRoundScore);
}

const roundLose = () => {
    const playerRoundScore = document.createElement('p');
    playerRoundScore.classList.add('red');
    playerRoundScore.textContent = '-1';
    playerScoreBoard.appendChild(playerRoundScore);
    const computerRoundScore = document.createElement('p');
    computerRoundScore.classList.add('green');
    computerRoundScore.textContent = '+1';
    computerScoreBoard.appendChild(computerRoundScore);
}

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        makeSelection(selectionName);
    })
});

function makeSelection(selection) {
    playRound(selection);
    const playerChoice = document.createElement('p');
    playerChoice.textContent = selection;
    playerSelections.appendChild(playerChoice);
};