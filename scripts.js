const options = ['rock', 'paper', 'scissors'];
const computerPlay = (options) => {
    return options[Math.floor(Math.random() * options.length)];
};
console.log(computerPlay(options));

const playRound = (selection) => {
    let computerSelection = computerPlay(options);
    if (selection === computerSelection) {
        console.log('tie');
    } else if ((selection === 'rock' && computerSelection === 'scissors') ||
                (selection === 'paper' && computerSelection === 'rock') ||
                (selection === 'scissors' && computerSelection === 'paper')) {
        console.log('you win');
    } else {
        console.log('you lose');
    }
}

// const updatePlayerChoice = () => {

// }

const selectionButtons = document.querySelectorAll('[data-selection]');

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        makeSelection(selectionName);
    })
});

function makeSelection(selection) {
    playRound(selection);
};