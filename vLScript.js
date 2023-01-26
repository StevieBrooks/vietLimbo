// HEADER BURGER MENU
const mainNavBurger = document.querySelector('.main-nav-burger');
const bar = document.querySelectorAll('.bar');
const mainNavList = document.querySelector('.main-nav-list');
const overlay = document.querySelector('.overlay');

mainNavBurger.addEventListener('click', () => {
    mainNavBurger.classList.toggle("active");
    mainNavList.classList.toggle("active");
    overlay.classList.toggle("active");
})


// vLALPHACARDS
const alphaCard = document.querySelectorAll('.alpha-card');
const cardAudio = document.querySelectorAll('.card-audio');
alphaCard.forEach((card, i) => {
    card.addEventListener('mouseenter', () => {
        cardAudio[i].play();
    });
    card.addEventListener('mouseleave', () => {
        cardAudio[i].pause();
        cardAudio[i].currentTime = 0;
    })
})


/* vLaLPHAGAME
Board */
const box = document.querySelectorAll('.box');
var rect = box[90].getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
// learn more about this - SO 'javascript location of element'

// Players
const alphaGamePlayer = document.querySelector('.alpha-game-player');
const alphaGameComp = document.querySelector('.alpha-game-comp');

// Choose Player
const player = document.querySelectorAll('.player');
player.forEach((p) => {
    p.addEventListener('click', () => {
        let playerIconWidth = (rect.right - rect.left) * 1.2;
        alphaGamePlayer.src = p.children[0].src;
        alphaGamePlayer.style.width = `${playerIconWidth}px`;
        alphaGamePlayer.style.position = 'absolute';
        alphaGamePlayer.style.top = `${rect.top}px`;
        // positioning this way dont work because users scroll on screen
    })
})
