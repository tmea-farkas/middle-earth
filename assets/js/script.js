
const moriaSection = document.getElementById('moria');
const cards = document.querySelectorAll('.card');

//Block Scopes
let score = 0;
let flippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let countdown;
let countdownInterval;

//Modals
let winModal = document.getElementById('winModal');
let winClose = document.getElementsByClassName('winClose')[0];

//Calling Elements
let timerBtn = document.getElementById('timerBtn');
let countdownDisplay = document.getElementById('countdown');
let rulesBtn = document.getElementById('myBtn');
let modal = document.getElementById('myModal');
let closeBtn = document.getElementsByClassName('close')[0];
let advBtn = document.getElementById('adventure-btn');
let closeLanding = document.getElementById('landing');
let closeTitle = document.getElementById('title');
let homeBtn = document.getElementById('homeBtn');

// Event listeners
homeBtn.addEventListener('click', goHome);
rulesBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);
advBtn.addEventListener('click', toMoria);
cards.forEach(card => card.addEventListener('click', flipCard));
document.getElementById('resetBtn').addEventListener('click', resetGame);
timerBtn.addEventListener('click', startCountdown, resetGame);
winClose.addEventListener('click', goHome);

//Functions
document.getElementById('riddle').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        validatePassword();
    }
});

const shuffleCards = () => {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 16);
        card.style.order = randomPosition;
    });
}

//Home section
function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function toMoria() {
    moriaSection.style.display = 'block';
    closeLanding.style.display = 'none';
    closeTitle.style.display = 'none';
}

//Password Validation - Moria section
function validatePassword() {
    let enteredPassword = document.getElementById('riddle').value.toLowerCase();
    let expectedPassword = "mellon".toLowerCase();
  
    if (enteredPassword === expectedPassword) {
        shuffleCards();
        moriaSection.style.display = 'none';
        startGame();
        document.getElementById('topBtns').style.display = 'block';
        document.getElementById('bottomBtns').style.display = 'block';
        document.getElementById('myGame').style.display = 'flex'; }
    else {
        alert("You shall not pass!");
    }
}

//In-game
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;

        return;
    }  
    secondCard = this;
    
    checkIfMatched();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {  
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1000);
}

function checkIfMatched() {
    if (firstCard.dataset.name === secondCard.dataset.name) {
        disableCards();
        score++;
        //check for win condition
        checkForWin();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function resetBoard() {
    [flippedCard, lockBoard] = [false, false]; //code from freeCodeCamp.org
    [firstCard, secondCard] = [null, null];
}

function resetGame() {
    clearInterval(countdown);
    cards.forEach(card => {
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
    });
    resetBoard();
    shuffleCards();
    timerBtn.disabled = false;
    countdownDisplay.innerHTML = '';
}

function startCountdown() {
    let seconds = 30;
    // Disable the timer button during the countdown
    timerBtn.disabled = true;
    // Start the countdown
    countdown = setInterval(function () {
        countdownDisplay.innerText = seconds;
        seconds--;

        if (seconds < 0) {
            disableAllCards();
            clearInterval(countdown);
            countdownDisplay.innerHTML = 'Try Again!';
            setTimeout(function(){
                resetGame();
                timerBtn.disabled = false; 
            }, 3000); //3 second wait before the game resets
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(countdown);
}

function disableAllCards() {
    cards.forEach(card => card.removeEventListener('click', flipCard));
}

function goHome() {
    resetGame();
    const elementsToHide = ['myGame', 'timerBtn', 'resetBtn', 'homeBtn','winModal'];
    const elementsToShow = ['landing', 'title'];
    elementsToHide.forEach(id => document.getElementById(id).style.display = 'none');
    elementsToShow.forEach(id => document.getElementById(id).style.display = 'block');
}

function startGame() {
    const elementsToShow = ['myGame', 'timerBtn', 'resetBtn', 'homeBtn'];
    elementsToShow.forEach(id => document.getElementById(id).style.display = 'block');
}

function closeWinModal() {
    winModal.style.display = 'none';
}

//End of Game
function checkForWin() {
    if (score === 8) {
       winner();
    }
}

function winner() {
    stopTimer();
    score = 0;
    winModal.style.display = 'block';
}