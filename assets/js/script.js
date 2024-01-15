// Home 
let btn1 = document.getElementById('myBtn') 
btn1.addEventListener('click', openModal)

let modal = document.getElementById('myModal')
let closeBtn = document.getElementsByClassName('close')[0]

closeBtn.addEventListener('click', closeModal)
modal.addEventListener('click', closeModal)

function openModal() {
    console.log('btn1 clicked')
    modal.style.display = 'block';
}
function closeModal() {
    console.log('modalClosed')
    modal.style.display = 'none'
}
//Game Entry

//Game Play

