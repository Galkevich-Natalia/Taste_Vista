function validateName() {
    const name = document.getElementById('name').value;
    const messageName = document.getElementById('messageName');

    const re = /^[A-Za-zА-Яа-яЁё]{6,20}(?:[-\s'][A-Za-zА-Яа-яЁё]{1,19})?$/;

    if (!re.test(name)) {
        messageName.textContent = 'Проверьте данные Name';
        messageName.style.color = "red";
    } else {
        messageName.textContent = '';
    }
}

function validatePhone() {
    const phone = document.getElementById('phone').value;
    const messagePhone = document.getElementById('messagePhone');

    const re = /^\+375\d{9}$/;

    if (!re.test(phone)) {
        messagePhone.textContent = 'Проверьте данные Phone';
        messagePhone.style.color = "red";
    } else {
        messagePhone.textContent = '';
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const messageEmail = document.getElementById('messageEmail');

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!re.test(email)) {
        messageEmail.textContent = 'Проверьте данные Email';
        messageEmail.style.color = "red";
    } else {
        messageEmail.textContent = '';
    }
}

function validateCity() {
    const city = document.getElementById('city').value;
    const messageCity = document.getElementById('messageCity');

    const re = /^[a-zA-Z\-]{3,20}$/;

    if (!re.test(city)) {
        messageCity.textContent = 'Проверьте данные City';
        messageCity.style.color = "red";
    } else {
        messageCity.textContent = '';
    }
}

function validateStreet() {
    const street = document.getElementById('street').value;
    const messageStreet = document.getElementById('messageStreet');

    const re = /^[a-zA-Z\s\-]+$/;

    if (!re.test(street)) {
        messageStreet.textContent = 'Проверьте данные Street';
        messageStreet.style.color = "red";
    } else {
        messageStreet.textContent = '';
    }
}

function validateHouse() {
    const house = document.getElementById('house').value;
    const messageHouse = document.getElementById('messageHouse');

    const re = /^\d+[A-Za-z]?(\/\d+)?$/;

    if (!re.test(house)) {
        messageHouse.textContent = 'Проверьте данные House';
        messageHouse.style.color = "red";
    } else {
        messageHouse.textContent = '';
    }
}

function validateApartment() {
    const apartment = document.getElementById('apartment').value;
    const messageApartment = document.getElementById('messageApartment');

    const re = /^\d+[A-Za-z]?(\/\d+)?$/;

    if (!re.test(apartment)) {
        messageApartment.textContent = 'Проверьте данные Apartment';
        messageApartment.style.color = "red";
    } else {
        messageApartment.textContent = '';
    }
}

export function validateForm() {
    validateName();
    validatePhone();
    validateEmail();
    validateCity();
    validateStreet();
    validateHouse();
    validateApartment();
}