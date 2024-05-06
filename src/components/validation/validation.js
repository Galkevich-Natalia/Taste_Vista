import {
    REGNAME, REGPHONE, REGEMAIL,
    REGCITY, REGSTREET, REGHOUSE, REGAPARTMENT
} from "../../constants/constants";

function validateName() {
    const nameValue = document.getElementById('name').value;
    const messageName = document.getElementById('messageName');

    if (!REGNAME.test(nameValue)) {
        messageInvalidInput(messageName, 'name');
        return false;
    }
    else {
        messsageValidInput(messageName);
        return true;
    }
}

function validatePhone() {
    const phoneValue = document.getElementById('phone').value;
    const messagePhone = document.getElementById('messagePhone');

    if (!REGPHONE.test(phoneValue)) {
        messageInvalidInput(messagePhone, 'phone');
        return false;
    } else {
        messsageValidInput(messagePhone);
        return true;
    }
}

function validateEmail() {
    const emailValue = document.getElementById('email').value;
    const messageEmail = document.getElementById('messageEmail');

    if (!REGEMAIL.test(emailValue)) {
        messageInvalidInput(messageEmail, 'email');
        return false;
    } else {
        messsageValidInput(messageEmail);
        return true;
    }
}

function validateCity() {
    const cityValue = document.getElementById('city').value;
    const messageCity = document.getElementById('messageCity');

    if (!REGCITY.test(cityValue)) {
        messageInvalidInput(messageCity, 'city');
        return false;
    } else {
        messsageValidInput(messageCity);
        return true;
    }
}

function validateStreet() {
    const streetValue = document.getElementById('street').value;
    const messageStreet = document.getElementById('messageStreet');

    if (!REGSTREET.test(streetValue)) {
        messageInvalidInput(messageStreet, 'street');
        return false;
    } else {
        messsageValidInput(messageStreet);
        return true;
    }
}

function validateHouse() {
    const houseValue = document.getElementById('house').value;
    const messageHouse = document.getElementById('messageHouse');

    if (!REGHOUSE.test(houseValue)) {
        messageInvalidInput(messageHouse, 'house');
        return false;
    } else {
        messsageValidInput(messageHouse);
        return true;
    }
}

function validateApartment() {
    const apartmentValue = document.getElementById('apartment').value;
    const messageApartment = document.getElementById('messageApartment');

    if (!REGAPARTMENT.test(apartmentValue)) {
        messageInvalidInput(messageApartment, 'apartment');
        return false;
    } else {
        messsageValidInput(messageApartment);
        return true;
    }
}

function messageInvalidInput(messageValue, inputValue) {
    messageValue.textContent = 'Please enter a valid ' + inputValue;
    messageValue.style.color = "red";
}

function messsageValidInput(messageCorrectValue) {
    messageCorrectValue.textContent = '';
}

export function validateForm() {
    const arrayCalls = [validateName(), validatePhone(), validateEmail(), validateCity(), validateStreet(), validateHouse(), validateApartment()];
    const isValidForm = arrayCalls.every((item) => item === true);

    return isValidForm;
}