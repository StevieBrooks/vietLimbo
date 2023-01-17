// BURGER MENU
const mainNavBurger = document.querySelector('.main-nav-burger');
const bar = document.querySelectorAll('.bar');
const mainNavList = document.querySelector('.main-nav-list');

mainNavBurger.addEventListener('click', () => {
    mainNavBurger.classList.toggle("active");
    mainNavList.classList.toggle("active");
})