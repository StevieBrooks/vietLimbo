// BURGER MENU
const mainNavBurger = document.querySelector('.main-nav-burger');
const bar = document.querySelectorAll('.bar');
const mainNavList = document.querySelector('.main-nav-list');
const overlay = document.querySelector('.overlay');

mainNavBurger.addEventListener('click', () => {
    mainNavBurger.classList.toggle("active");
    mainNavList.classList.toggle("active");
    overlay.classList.toggle("active");
})

// ALPHABET CARDS
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





