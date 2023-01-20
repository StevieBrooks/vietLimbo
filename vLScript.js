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
alphaCard.forEach((card) => {
    card.addEventListener('mouseenter', function() {
        switch(card) {
            case alphaCard[0]:
                cardAudio[0].play();
                break;
            case alphaCard[1]:
                cardAudio[1].play();
                break;
            case alphaCard[2]:
                cardAudio[02].play();
                break;
            case alphaCard[3]:
                cardAudio[3].play();
                break;
            case alphaCard[4]:
                cardAudio[4].play();
                break;
            case alphaCard[5]:
                cardAudio[5].play();
                break;
            case alphaCard[6]:
                cardAudio[6].play();
                break;
            case alphaCard[7]:
                cardAudio[7].play();
                break;
            case alphaCard[8]:
                cardAudio[8].play();
                break;
            case alphaCard[9]:
                cardAudio[9].play();
                break;
            case alphaCard[10]:
                cardAudio[10].play();
                break;
            case alphaCard[11]:
                cardAudio[11].play();
                break;
            case alphaCard[12]:
                cardAudio[12].play();
                break;
            case alphaCard[13]:
                cardAudio[13].play();
                break;
            case alphaCard[14]:
                cardAudio[14].play();
                break;
            case alphaCard[15]:
                cardAudio[15].play();
                break;
            case alphaCard[16]:
                cardAudio[16].play();
                break;
            case alphaCard[17]:
                cardAudio[17].play();
                break;
            case alphaCard[18]:
                cardAudio[18].play();
                break;
            case alphaCard[19]:
                cardAudio[19].play();
                break;
            case alphaCard[20]:
                cardAudio[20].play();
                break;
            case alphaCard[21]:
                cardAudio[21].play();
                break;
            case alphaCard[22]:
                cardAudio[22].play();
                break;
            case alphaCard[23]:
                cardAudio[23].play();
                break;
            case alphaCard[24]:
                cardAudio[24].play();
                break;
            case alphaCard[25]:
                cardAudio[25].play();
                break;
            case alphaCard[26]:
                cardAudio[26].play();
                break;
            case alphaCard[27]:
                cardAudio[27].play();
                break;
            case alphaCard[28]:
                cardAudio[28].play();
                break;
            case alphaCard[29]:
                cardAudio[29].play();
                break;
            case alphaCard[30]:
                cardAudio[30].play();
                break;
            case alphaCard[31]:
                cardAudio[31].play();
                break;
            case alphaCard[32]:
                cardAudio[32].play();
                break;
            case alphaCard[33]:
                cardAudio[33].play();
                break;
            case alphaCard[34]:
                cardAudio[34].play();
                break;
            case alphaCard[35]:
                cardAudio[35].play();
                break;
            case alphaCard[36]:
                cardAudio[36].play();
                break;
            case alphaCard[37]:
                cardAudio[37].play();
                break;
        }
    })
})






// const card1 = document.querySelector('.card1');
// const cardAudio = document.querySelector('.card-audio');
// card1.addEventListener('mouseenter', function() {
//     cardAudio.play();
// })
// card1.addEventListener('mouseleave', function() {
//     cardAudio.pause();
//     cardAudio.currentTime = 0;
// })