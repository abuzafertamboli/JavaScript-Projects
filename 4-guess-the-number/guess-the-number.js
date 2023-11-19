let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector('.guessSubmit');
const userInput = document.querySelector('.guessField');
const guessesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        let guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number");
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            checkGuess(guess);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuessTwo(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congrats! You Won.`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Game Over. The random number is ${randomNumber}`);
    } else if (guess > randomNumber) {
        displayMessage(`Game Over. The random number is ${randomNumber}`);
    }
}

function checkGuessTwo(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congrats! You Won.`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOO low!`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOO high!`);
    }
}

function displayGuess(guess) { // It cleans up the older value
    userInput.value = '';
    guessesSlot.innerHTML += `"${guess}" `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h3 id="newGame">Start new game</h3>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(event) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessesSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}