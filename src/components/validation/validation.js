import {
    REGNAME, REGPHONE, REGEMAIL,
    REGCITY, REGSTREET, REGHOUSE, REGAPARTMENT
} from "../../constants/constants";

function validateName() {
    const name = document.getElementById('name').value;
    const messageName = document.getElementById('messageName');

    if (!REGNAME.test(name)) {
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

    if (!REGPHONE.test(phone)) {
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

    if (!REGEMAIL.test(email)) {
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

    if (!REGCITY.test(city)) {
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

    if (!REGSTREET.test(street)) {
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

    if (!REGHOUSE.test(house)) {
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

    if (!REGAPARTMENT.test(apartment)) {
        messageApartment.textContent = 'Проверьте данные Apartment';
        messageApartment.style.color = "red";
        return false;
    } else {
        messageApartment.textContent = '';
        return true;
    }
}

function validateForm() {
    const arrayCalls = [validateName(), validatePhone(), validateEmail(), validateCity(), validateStreet(), validateHouse(), validateApartment()];
    const isValidForm = arrayCalls.every((item) => item === true);

    return isValidForm;
}

export function checkValidation() {
    if (validateForm()) {
        const checkoutModal = document.querySelector('.checkout__modal');
        const overlayCheckout = document.querySelector('.overlayCheckout');
        const body = document.querySelector('body');

        checkoutModal.style.display = 'block';
        overlayCheckout.style.display = 'block';
        body.classList.add('checkout__modal-open');
    }
}


const checkoutModalBtnClose = document.querySelector('.checkout__modal-btn');
checkoutModalBtnClose.addEventListener('click', closeCheckoutModal);

function closeCheckoutModal() {
    const checkoutModal = document.querySelector('.checkout__modal');
    const overlayCheckout = document.querySelector('.overlayCheckout');
    const body = document.querySelector('body');

    checkoutModal.remove();
    overlayCheckout.style.display = 'none';
    body.classList.remove('checkout__modal-open');

    window.location.href = "menu.html";
}