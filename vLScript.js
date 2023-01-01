// MAIN-HEADER
const mainLogo = document.querySelector('.main-header .logo');
const mainNav = document.querySelector('.main-nav');
mainLogo.addEventListener('touch', touchLogo);
function touchLogo() {
    mainNav.style.display = 'flex';
}
