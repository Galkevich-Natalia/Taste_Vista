const burgerMenu = document.querySelector('.burger-menu');
const sideBarCross = document.querySelector('.side-bar__cross');
const sideBar = document.querySelector('.side-bar');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

burgerMenu.addEventListener('click', openSideBar);
sideBarCross.addEventListener('click', closeSideBar);

function openSideBar() {
    sideBar.style.display = 'block';
    overlay.style.display = 'block';
    overlay.addEventListener('click', closeSideBar);
    body.classList.add('hideScroll');
}

function closeSideBar() {
    sideBar.style.display = 'none';
    overlay.style.display = 'none';
    body.classList.remove('hideScroll');
}