const burgerMenu = document.querySelector('.burger-menu');
const sideBarCross = document.querySelector('.side-bar__cross');
const sideBar = document.querySelector('.side-bar');
const overlaySideBar = document.querySelector('.overlaySideBar');
const body = document.querySelector('body');

burgerMenu.addEventListener('click', openSideBar);
sideBarCross.addEventListener('click', closeSideBar);

function openSideBar() {
    sideBar.style.display = 'block';
    overlaySideBar.style.display = 'block';
    overlaySideBar.addEventListener('click', closeSideBar);
    body.classList.add('hideScroll');
}

function closeSideBar() {
    sideBar.style.display = 'none';
    overlaySideBar.style.display = 'none';
    body.classList.remove('hideScroll');
}