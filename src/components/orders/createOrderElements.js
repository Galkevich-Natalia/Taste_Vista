import { getFormatCurrency } from "../../utils/formatCurrency";
import { incrementCounter, decrementCounter } from "./orders";

const ordersCards = document.querySelector('.orders__cards');

export function addOrders(data) {
    ordersCards.append(createOrderCard(data));
}

function createOrderCard(data) {
    const orderCard = document.createElement('div');
    orderCard.classList.add('order-card');
    orderCard.id = data.id;
    orderCard.append(createOrderImage(data), createOrderName(data), createOrderInfo(data));
    orderCard.addEventListener('click', incrementCounter);
    orderCard.addEventListener('click', decrementCounter);

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
    info.append(createOrderCounter(data), createOrderPriceContainer(data));

    return info;
}

function createOrderCounter(data) {
    const counter = document.createElement('div');
    counter.classList.add('order-card__counter');
    counter.append(createOrderMinus(), createOrderCount(data), createOrderPlus());

    return counter;
}

function createOrderMinus() {
    const orderMinus = document.createElement('div');
    orderMinus.classList.add('order-card__container-minus');
    orderMinus.append(createMinus());

    return orderMinus;
}

function createMinus() {
    const btnMinus = document.createElement('button');
    btnMinus.classList.add('order-card__btn-minus')
    btnMinus.textContent = "-";

    return btnMinus;
}

function createOrderCount(data) {
    const orderCount = document.createElement('div');
    orderCount.classList.add('order-card__count');
    orderCount.append(createCount(data));

    return orderCount;
}

function createCount(data) {
    const count = document.createElement('span');
    count.classList.add('order-card__count-value')
    count.textContent = data.count;

    return count;
}

function createOrderPlus() {
    const orderPlus = document.createElement('div');
    orderPlus.classList.add('order-card__container-plus');
    orderPlus.append(createPlus());

    return orderPlus;
}

function createPlus() {
    const btnPlus = document.createElement('button');
    btnPlus.classList.add('order-card__btn-plus');
    btnPlus.textContent = "+";

    return btnPlus;
}

function createOrderPriceContainer(data) {
    const orderPriceContainer = document.createElement('div');
    orderPriceContainer.classList.add('order-card__price');
    orderPriceContainer.append(createOrderPriceValue(data));

    return orderPriceContainer;
}

function createOrderPriceValue(data) {
    const orderPriceValue = document.createElement('span');
    orderPriceValue.classList.add('.order-card__price-value')
    const totalPriceDish = data.price * data.count
    orderPriceValue.textContent = getFormatCurrency(totalPriceDish);

    return orderPriceValue;
}