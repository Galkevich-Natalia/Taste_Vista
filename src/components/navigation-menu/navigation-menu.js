const burgerMenu = document.querySelector('.burger-menu');
const sideBarCross = document.querySelector('.side-bar__cross');

burgerMenu.addEventListener('click', openSideBar);
sideBarCross.addEventListener('click', closeSideBar);

function openSideBar() {
    const sideBar = document.querySelector('.side-bar');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');

    burgerMenu.style.display = 'none';
    sideBar.style.display = 'block';
    overlay.style.display = 'block';
    overlay.addEventListener('click', closeSideBar);
    body.classList.add('hideScroll');
}

function closeSideBar() {
    const sideBar = document.querySelector('.side-bar');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');

    sideBar.style.display = 'none';
    burgerMenu.style.display = 'block';
    overlay.style.display = 'none';
    body.classList.remove('hideScroll');
}