const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__list');
const welcome = document.querySelector('.welcome__left-column');
let itemMenu = document.querySelectorAll('.header__item');

burger.addEventListener('click', function() {
    menu.classList.toggle('open');
    burger.classList.toggle('close');
    welcome.classList.toggle('welcome__left-column_left');
});


itemMenu.forEach(links => {
    links.addEventListener('click', () => {
        welcome.classList.remove('welcome__left-column_left');
        burger.classList.remove('close');
        menu.classList.remove('open');
    });
})