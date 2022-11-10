var isStarted = false;

var attemptCount = 0;

const numberOutput = document.querySelector('#numberOutput');
const numberInput = document.querySelector('#numberInput');
const indicatorOutput = document.querySelector('#indicatorOutput');
const attemptOutput = document.querySelector('#attemptOutput');

function onClickGuessButton() {
    if (!isStarted) {
        startGame();
    }
    else {
        var guess = parseInt(numberInput.value);
        if (validateNumber(guess)) {
            numberInput.style.background = '#FFFFFF'
            if (guess < number) {
                numberOutput.className = 'fa-solid fa-arrow-up';
                attemptCount++;
                attemptOutput.textContent = attemptCount;
            }
            else if (guess > number) {
                numberOutput.className = 'fa-solid fa-arrow-down';
                attemptCount++;
                attemptOutput.textContent = attemptCount
            }
            else {
                endGame();
            }
        }
        else {
            numberInput.style.background = '#C76553';
        }
    }
}

var numberMax = 100;
var number = 0;

const guessButton = document.querySelector('#guessButton');

function startGame() {
    isStarted = true;
    number = Math.floor(Math.random() * numberMax) + 1;
    attemptCount = 0;
    attemptOutput.textContent = attemptCount;
    numberOutput.textContent = '';
    numberInput.style.background = '#FFFFFF';
    guessButton.textContent = 'Essayer';
}

function validateNumber(guess) {
    if (Number.isNaN(guess)) {
        return false;
    }
    if (guess < 1 || guess > numberMax) {
        return false;
    }
    return true;
}

function endGame() {
    isStarted = false;
    numberOutput.textContent = number;
    numberOutput.className = '';
    numberInput.style.background = '#AAAAAA';
    numberInput.textContent = '';
    guessButton.textContent = 'Recommencer';
}