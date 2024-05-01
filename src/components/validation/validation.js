import {
    REGNAME, REGPHONE, REGEMAIL,
    REGCITY, REGSTREET, REGHOUSE, REGAPARTMENT
} from "../../constants/constants";

function validateName() {
    const name = document.getElementById('name').value;
    const messageName = document.getElementById('messageName');

    if (!REGNAME.test(name)) {
        messageName.textContent = 'Please enter a valid name';
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
        messagePhone.textContent = 'Please enter a valid phone number';
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
        messageEmail.textContent = 'Please enter a valid email address';
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
        messageCity.textContent = 'Please enter a valid city name';
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
        messageStreet.textContent = 'Please enter a valid street name';
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
        messageHouse.textContent = 'Please enter a valid house number';
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
        messageApartment.textContent = 'Please enter a valid apartment number';
        messageApartment.style.color = "red";
        return false;
    } else {
        messageApartment.textContent = '';
        return true;
    }
}

export function validateForm() {
    const arrayCalls = [validateName(), validatePhone(), validateEmail(), validateCity(), validateStreet(), validateHouse(), validateApartment()];
    const isValidForm = arrayCalls.every((item) => item === true);

    return isValidForm;
}