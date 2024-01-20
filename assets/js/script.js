const moriaSection = document.getElementById('moria');
const cards = document.querySelectorAll('.card');

let score = 0;
let flippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

// Modal added to display game rules when clicked
let btn1 = document.getElementById('myBtn') 
btn1.addEventListener('click', openModal)

let modal = document.getElementById('myModal')
let closeBtn = document.getElementsByClassName('close')[0]

closeBtn.addEventListener('click', closeModal)
modal.addEventListener('click', closeModal)


//Two ways to close modal. On button click and if clicked outside of it
function openModal() {
    console.log('btn1 clicked')
    modal.style.display = 'block';
}
function closeModal() {
    console.log('modalClosed')
    modal.style.display = 'none'
}
//Game Entry
let advBtn = document.getElementById('adventure-btn')
let closeLanding = document.getElementById('landing')
let closeTitle = document.getElementById('title')
//when button clicked landing diasppears and moria section appears
advBtn.addEventListener('click', toMoria) 

function toMoria() {
    moriaSection.style.display = 'block';
    closeLanding.style.display = 'none';
    closeTitle.style.display = 'none';
    console.log('Landing Closed; At the gates')
}

// Password validation

function validatePassword() {
    var enteredPassword = document.getElementById('riddle').value.toLowerCase();
    var expectedPassword = "mellon".toLowerCase();

    
    if (enteredPassword === expectedPassword) {
        shuffleCards();
        moriaSection.style.display = 'none';
        startGame();
        document.getElementById('topBtns').style.display = 'block';
        document.getElementById('bottomBtns').style.display = 'block';
        document.getElementById('myGame').style.display = 'flex' }
    else {
            alert("You shall not pass!");
        }

    }

document.getElementById('riddle').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        validatePassword();
    }
});

//Game Play

cards.forEach(card => card.addEventListener('click', flipCard));

//flip cards
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
    if (firstCard.dataset.name ===
        secondCard.dataset.name)//matching 
        {
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

//shuffle
const shuffleCards = (function() {
    return function() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 16); 
        card.style.order = randomPosition;
    });
}
})();

//Reset
document.getElementById('resetBtn').addEventListener('click', resetGame);

function resetGame() {

    clearInterval(countdown);

    cards.forEach(card => {
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
    });

    resetBoard();

    shuffleCards();

    countdownDisplay.innerHTML = '';
    console.log('Game Reset');
}
//Timer
let countdown;
let timerBtn = document.getElementById('timerBtn');
let countdownDisplay = document.getElementById('countdown');

timerBtn.addEventListener('click', startCountdown, resetGame);

function startCountdown() {
    let seconds = 10;
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

function disableAllCards() {
    cards.forEach(card => card.removeEventListener('click', flipCard));
}

//Game Exit
let homeBtn = document.getElementById('homeBtn')
homeBtn.addEventListener('click', goHome)

function goHome() {
    console.log('Back to Home');
    resetGame();
    const elementsToHide = ['myGame', 'timerBtn', 'resetBtn', 'homeBtn'];
    const elementsToShow = ['landing', 'title'];

    elementsToHide.forEach(id => document.getElementById(id).style.display = 'none');
    elementsToShow.forEach(id => document.getElementById(id).style.display = 'block');
}
function startGame() {
    console.log('Start Game');
    const elementsToShow = ['myGame', 'timerBtn', 'resetBtn', 'homeBtn'];

    elementsToShow.forEach(id => document.getElementById(id).style.display = 'block');
}
// Win
function checkForWin() {
    if (score === 8) {
       winner();
    }
}
function winner() {
    //modal pop

}