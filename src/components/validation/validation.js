function validateName(name) {
    const re = /^[A-Za-zА-Яа-яЁё]{6,20}(?:[-\s'][A-Za-zА-Яа-яЁё]{1,19})?$/;
    return re.test(name);
}

function validatePhone(phone) {
    const re = /^\+375\d{9}$/;
    return re.test(phone);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateCity(city) {
    const re = /^[a-zA-Z\-]{3,20}$/;
    return re.test(city);
}

function validateStreet(street) {
    const re = /^[a-zA-Z\s\-]+$/;
    return re.test(street);
}

function validateHouse(house) {
    const re = /^\d+[A-Za-z]?(\/\d+)?$/;
    return re.test(house);
}

function validateApartment(apartment) {
    const re = /^\d+[A-Za-z]?(\/\d+)?$/;
    return re.test(apartment);
}

export function validateForm() {
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const street = document.getElementById('street').value;
    const house = document.getElementById('house').value;
    const apartment = document.getElementById('apartment').value;

    const messageName = document.getElementById('messageName');
    const messagePhone = document.getElementById('messagePhone');
    const messageEmail = document.getElementById('messageEmail');
    const messageCity = document.getElementById('messageCity');
    const messageStreet = document.getElementById('messageStreet');
    const messageHouse = document.getElementById('messageHouse');
    const messageApartment = document.getElementById('messageApartment');

    if (!validateName(name)) {
        messageName.textContent = 'Проверьте данные Name';
        messageName.style.color = "red";
    } else if (!validatePhone(phone)) {
        messagePhone.textContent = 'Проверьте данные Phone';
        messagePhone.style.color = "red";
    } else if (!validateEmail(email)) {
        messageEmail.textContent = 'Проверьте данные Email';
        messageEmail.style.color = "red";
    } else if (!validateCity(city)) {
        messageCity.textContent = 'Проверьте данные City';
        messageCity.style.color = "red";
    } else if (!validateStreet(street)) {
        messageStreet.textContent = 'Проверьте данные Street';
        messageStreet.style.color = "red";
    } else if (!validateHouse(house)) {
        messageHouse.textContent = 'Проверьте данные House';
        messageHouse.style.color = "red";
    } else if (!validateApartment(apartment)) {
        messageApartment.textContent = 'Проверьте данные Apartment';
        messageApartment.style.color = "red";
    } else {
        messageName.textContent = '';
        messagePhone.textContent = '';
        messageEmail.textContent = '';
        messageCity.textContent = '';
        messageStreet.textContent = '';
        messageHouse.textContent = '';
        messageApartment.textContent = '';
        console.log("Регистрация прошла успешно!")
    }
}