const menuBtn = document.querySelector('.menu-btn');
const hamBurger = document.querySelector('.menu-btn__burger');

const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');

const navitems = document.querySelectorAll('.menu-nav__item');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (showMenu) {
        // if menu is open close it
        hamBurger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');

        navitems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    } else {
        // if menu is closed open it
        hamBurger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');

        navitems.forEach(item => item.classList.add('open'));

        showMenu = true;
    }
}