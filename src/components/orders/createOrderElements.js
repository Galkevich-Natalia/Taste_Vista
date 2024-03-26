import { addDishToOrdersPage } from "./addOrdersOnPage";

const ordersCards = document.querySelector('.orders__cards');

addDishToOrdersPage();

export function addOrders(data) {
    ordersCards.append(createOrderCard(data));
}

function createOrderCard(data) {
    const orderCard = document.createElement('div');
    orderCard.classList.add('order-card');
    orderCard.append(createOrderImage(data), createOrderName(data), createOrderInfo(data));

    return orderCard;
}

function createOrderImage(data) {
    const orderImage = document.createElement('div');
    orderImage.classList.add('order-card__image');
    orderImage.append(createImage(data));

    return orderImage;
}

function createImage(data) {
    const cardImg = document.createElement('img');
    cardImg.src = data.image;

    return cardImg;
}

function createOrderName(data) {
    const orderName = document.createElement('div');
    orderName.classList.add('order-card__name');
    orderName.append(createName(data));

    return orderName;
}

function createName(data) {
    const name = document.createElement('span');
    name.textContent = data.name;

    return name;
}

function createOrderInfo(data) {
    const info = document.createElement('div');
    info.classList.add('order-card__info');
    info.append(createOrderCounter(), createOrderPrice(data));

    return info;
}

function createOrderCounter() {
    const counter = document.createElement('div');
    counter.classList.add('order-card__counter');
    counter.append(createOrderPlus(), createOrderCount(), createOrderMinus());

    return counter;
}

function createOrderPlus() {
    const orderPlus = document.createElement('div');
    orderPlus.classList.add('order-card__plus');
    orderPlus.append(createPlus());

    return orderPlus;
}

function createPlus() {
    const plus = document.createElement('button');
    plus.textContent = "+";

    return plus;
}

function createOrderCount() {
    const orderCount = document.createElement('div');
    orderCount.classList.add('order-card__count');
    orderCount.append(createCount());

    return orderCount;
}

function createCount() {
    const count = document.createElement('span');
    count.textContent = "4";

    return count;
}

function createOrderMinus() {
    const orderMinus = document.createElement('div');
    orderMinus.classList.add('order-card__minus');
    orderMinus.append(createMinus());

    return orderMinus;
}

function createMinus() {
    const minus = document.createElement('button');
    minus.textContent = "-";

    return minus;
}

function createOrderPrice(data) {
    const orderPrice = document.createElement('div');
    orderPrice.classList.add('order-card__price');
    orderPrice.append(createPrice(data));

    return orderPrice;
}

function createPrice(data) {
    const price = document.createElement('span');
    price.textContent = data.price;

    return price;
}