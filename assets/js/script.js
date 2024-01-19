const moriaSection = document.getElementById('moria');
const cards = document.querySelectorAll('.card');

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
advBtn.addEventListener('click', toMoria, closeLanding, closeTitle) 

function toMoria() {
    moriaSection.style.display = 'block';
    document.getElementById('landing').style.display = 'none';
    document.getElementById('title').style.display = 'none';
    console.log('Landing Closed; At the gates')
}
// Password validation

function validatePassword() {
    var enteredPassword = document.getElementById('riddle').value.toLowerCase();
    var expectedPassword = "mellon".toLowerCase();

    
    if (enteredPassword === expectedPassword) {
        moriaSection.style.display = 'none';
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
    this.classList.add('flip');

    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;
    }else {
        flippedCard = false;
        secondCard = this;
    
    if (firstCard.dataset.name ===
        secondCard.dataset.name)//matching 
        {
           firstCard.removeEventListener('click', flipCard);
           secondCard.removeEventListener('click', flipCard) 
    } else {

        setTimeout(() => {

        
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        }, 1500);
    }
    
    }
    }


//shuffle cards

//Reset Button

// Timer

// Flip count

//Exit
