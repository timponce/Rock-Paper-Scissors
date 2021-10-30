const content = document.querySelector('.content');
const scoreHeader = document.querySelector('.scoreHeader');
const roundLog = document.querySelector('.roundLog');
const roundResult = document.querySelector('.roundResult')
const selectionButtons = document.querySelectorAll('[data-selection]');

let playerScore = 0;
let computerScore = 0;

const options = ['rock', 'paper', 'scissors'];
const computerPlay = (options) => {
    return options[Math.floor(Math.random() * options.length)];
};

const playRound = (selection) => {
    let computerSelection = computerPlay(options);
    if (selection === computerSelection) {
        roundResult.textContent = 'You tied this round.';
        document.body.style.background = '#EDEDED';
    } else if ((selection === 'rock' && computerSelection === 'scissors') ||
                (selection === 'paper' && computerSelection === 'rock') ||
                (selection === 'scissors' && computerSelection === 'paper')) {
        roundResult.textContent = 'You win this round.';
        playerScore++;
        document.body.style.background = '#B9EA9C'
    } else {
        roundResult.textContent = 'You lose this round.';
        computerScore++;
        document.body.style.background = '#FA5656'
    }
    scoreHeader.textContent = `${playerScore} You vs Computer ${computerScore}`
    roundLog.textContent = `You threw ${selection}! The computer threw ${computerSelection}!`;
    updateScore();
}

const updateScore = () => {
    if (playerScore === 5) {
        playerWins();
    } else if (computerScore === 5) {
        playerLoses();
    }
}

const playerWins = () => {
    content.classList.toggle('winner');
}

const playerLoses = () => {
    content.classList.toggle('loser');
}

const restartGame = () => {
    playerScore = 0;
    computerScore = 0;
    scoreHeader.textContent = '0 You vs Computer 0';
}

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        makeSelection(selectionName);
    })
});

function makeSelection(selection) {
    playRound(selection);
};