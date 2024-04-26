function validateName() {
    const name = document.getElementById('name').value;
    const messageName = document.getElementById('messageName');

    const re = /^[A-Za-zА-Яа-яЁё]{6,20}(?:[-\s'][A-Za-zА-Яа-яЁё]{1,19})?$/;

    if (!re.test(name)) {
        messageName.textContent = 'Проверьте данные Name';
        messageName.style.color = "red";
        return false;
    } else {
        messageName.textContent = '';
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById('phone').value;
    const messagePhone = document.getElementById('messagePhone');

    const re = /^\+375\d{9}$/;

    if (!re.test(phone)) {
        messagePhone.textContent = 'Проверьте данные Phone';
        messagePhone.style.color = "red";
        return false;
    } else {
        messagePhone.textContent = '';
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const messageEmail = document.getElementById('messageEmail');

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!re.test(email)) {
        messageEmail.textContent = 'Проверьте данные Email';
        messageEmail.style.color = "red";
        return false;
    } else {
        messageEmail.textContent = '';
        return true;
    }
}

function validateCity() {
    const city = document.getElementById('city').value;
    const messageCity = document.getElementById('messageCity');

    const re = /^[a-zA-Z\-]{3,20}$/;

    if (!re.test(city)) {
        messageCity.textContent = 'Проверьте данные City';
        messageCity.style.color = "red";
        return false;
    } else {
        messageCity.textContent = '';
        return true;
    }
}

function validateStreet() {
    const street = document.getElementById('street').value;
    const messageStreet = document.getElementById('messageStreet');

    const re = /^[a-zA-Z\s\-]+$/;

    if (!re.test(street)) {
        messageStreet.textContent = 'Проверьте данные Street';
        messageStreet.style.color = "red";
        return false;
    } else {
        messageStreet.textContent = '';
        return true;
    }
}

function validateHouse() {
    const house = document.getElementById('house').value;
    const messageHouse = document.getElementById('messageHouse');

    const re = /^\d+[A-Za-z]?(\/\d+)?$/;

    if (!re.test(house)) {
        messageHouse.textContent = 'Проверьте данные House';
        messageHouse.style.color = "red";
        return false;
    } else {
        messageHouse.textContent = '';
        return true;
    }
}

function validateApartment() {
    const apartment = document.getElementById('apartment').value;
    const messageApartment = document.getElementById('messageApartment');

    const re = /^\d+[A-Za-z]?(\/\d+)?$/;

    if (!re.test(apartment)) {
        messageApartment.textContent = 'Проверьте данные Apartment';
        messageApartment.style.color = "red";
        return false;
    } else {
        messageApartment.textContent = '';
        return true;
    }
}

export function validateForm() {
    const checkoutModal = document.querySelector('.checkout__modal');
    const overlayCheckout = document.querySelector('.overlayCheckout');
    const body = document.querySelector('body');
    const arrayCalls = [validateName(), validatePhone(), validateEmail(), validateCity(), validateStreet(), validateHouse(), validateApartment()];

    const isValidResult = arrayCalls.every((item) => item === true)

    if (isValidResult) {
        checkoutModal.style.display = 'block';
        overlayCheckout.style.display = 'block';
        body.classList.add('checkout__modal-open');
    }
}

const checkoutModalBtnClose = document.querySelector('.checkout__modal-btn');
checkoutModalBtnClose.addEventListener('click', closeCheckoutModal);

function closeCheckoutModal(event) {
    const checkoutModal = document.querySelector('.checkout__modal');
    const overlayCheckout = document.querySelector('.overlayCheckout');
    const body = document.querySelector('body');

    checkoutModal.remove();
    overlayCheckout.style.display = 'none';
    body.classList.remove('checkout__modal-open');

    window.location.href = "menu.html";
}