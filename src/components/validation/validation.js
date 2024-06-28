import {
    REGNAME, REGPHONE, REGEMAIL,
    REGCITY, REGSTREET, REGHOUSE, REGAPARTMENT
} from "../../constants/constants";

function validateName() {
    const nameValue = document.getElementById('name').value;
    const messageName = document.getElementById('messageName');

    if (!REGNAME.test(nameValue)) {
        return messageInvalidInput(messageName, 'name');
    } else {
        return messsageValidInput(messageName);
    }
}

function validatePhone() {
    const phoneValue = document.getElementById('phone').value;
    const messagePhone = document.getElementById('messagePhone');

    if (!REGPHONE.test(phoneValue)) {
        return messageInvalidInput(messagePhone, 'phone');
    } else {
        return messsageValidInput(messagePhone);
    }
}

function validateEmail() {
    const emailValue = document.getElementById('email').value;
    const messageEmail = document.getElementById('messageEmail');

    if (!REGEMAIL.test(emailValue)) {
        return messageInvalidInput(messageEmail, 'email');
    } else {
        return messsageValidInput(messageEmail);
    }
}

function validateCity() {
    const cityValue = document.getElementById('city').value;
    const messageCity = document.getElementById('messageCity');

    if (!REGCITY.test(cityValue)) {
        return messageInvalidInput(messageCity, 'city');
    } else {
        return messsageValidInput(messageCity);
    }
}

function validateStreet() {
    const streetValue = document.getElementById('street').value;
    const messageStreet = document.getElementById('messageStreet');

    if (!REGSTREET.test(streetValue)) {
        return messageInvalidInput(messageStreet, 'street');
    } else {
        return messsageValidInput(messageStreet);
    }
}

function validateHouse() {
    const houseValue = document.getElementById('house').value;
    const messageHouse = document.getElementById('messageHouse');

    if (!REGHOUSE.test(houseValue)) {
        return messageInvalidInput(messageHouse, 'house');
    } else {
        return messsageValidInput(messageHouse);
    }
}

function validateApartment() {
    const apartmentValue = document.getElementById('apartment').value;
    const messageApartment = document.getElementById('messageApartment');

    if (!REGAPARTMENT.test(apartmentValue)) {
        return messageInvalidInput(messageApartment, 'apartment');
    } else {
        return messsageValidInput(messageApartment);
    }
}

function messageInvalidInput(messageValue, inputValue) {
    messageValue.textContent = 'Please enter a valid ' + inputValue;
    return false;
}

function messsageValidInput(messageCorrectValue) {
    messageCorrectValue.textContent = '';
    return true;
}

export function validateForm() {
    const arrayCalls = [validateName(), validatePhone(), validateEmail(), validateCity(), validateStreet(), validateHouse(), validateApartment()];
    const isValidForm = arrayCalls.every((item) => item === true);

    return isValidForm;
}