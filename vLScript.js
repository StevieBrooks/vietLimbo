// BURGER MENU
const mainNavBurger = document.querySelector('.main-nav-burger');
const burgerSlice = document.querySelectorAll('.burger-slice');

mainNavBurger.addEventListener('click', mainNavFunc);
function mainNavFunc() {
    burgerSlice.forEach(function(el) {
        el.style.display = 'none';
    });
    mainNavBurger.children[0].style.display = 'block';
}