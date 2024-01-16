// Home 

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
advBtn.addEventListener('click', toMoria, closeLanding, closeTitle) //when button clicked landing diasppears and moria section appears


function toMoria() {
    document.getElementById('moria').style.display = 'block';
    document.getElementById('landing').style.display = 'none';
    document.getElementById('title').style.display = 'none';
    console.log('Landing Closed; At the gates')
}
// Password validation

function validatePassword() {
    var enteredPassword = document.getElementById('riddle').value.toLowerCase();
    var expectedPassword = "mellon".toLowerCase();

    if (enteredPassword === expectedPassword) {
        window.location.href = '#game-play' }
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

