const ordersWrapper = document.querySelector('.orders__wrapper');

function addOrders() {
    console.log("Hi");
    ordersWrapper.append(createOrdersTitle(), createOrdersCards(), createOrdersTotalPrice(), createOrdersButton());
}

addOrders();

function createOrdersTitle() {
    const ordersTitle = document.createElement('div');
    ordersTitle.classList.add('orders__title');
    ordersTitle.append(createTitle());

    return ordersTitle;
}

function createTitle() {
    const title = document.createElement('h2');
    title.textContent = "Orders";

    return title;
}

function createOrdersCards() {
    const ordersCards = document.createElement('div');
    ordersCards.classList.add('orders__cards');
    ordersCards.append(createOrderCard());

    return ordersCards;
}

function createOrderCard() {
    const orderCard = document.createElement('div');
    orderCard.classList.add('order-card');
    orderCard.append(createOrderImage(), createOrderName(), createOrderInfo());

    return orderCard;
}

function createOrderImage() {
    const orderImage = document.createElement('div');
    orderImage.classList.add('order-card__image');
    orderImage.append(createImage());

    return orderImage;
}

function createImage() {
    const img = document.createElement('img');

    return img;
}

function createOrderName() {
    const orderName = document.createElement('div');
    orderName.classList.add('order-card__name');
    orderName.append(createName());

    return orderName;
}

function createName() {
    const name = document.createElement('span');
    name.textContent = "Pizza";
    
    return name;
}

function createOrderInfo() {
    const info = document.createElement('div');
    info.classList.add('order-card__info');
    info.append(createOrderCounter());

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

function createOrderPrice() {
    const orderPrice = document.createElement('div');
    orderPrice.classList.add('order-card__price');
    orderPrice.append(createPrice());

    return orderPrice;
}

function createPrice() {
    const price = document.createElement('span');
    
    return price;
}

function createOrdersTotalPrice() {
    const ordersTotalPrice = document.createElement('div');
    ordersTotalPrice.classList.add('orders__totalPrice');
    ordersTotalPrice.append(createTotalPrice());

    return ordersTotalPrice;
}

function createTotalPrice() {
    const totalPrice = document.createElement('span');
    totalPrice.textContent = "60$";

    return totalPrice;
}

function createOrdersButton() {
    const ordersButton= document.createElement('div');
    ordersButton.classList.add('orders__btn');
    ordersButton.append(createBtn());

    return ordersButton;
}

function createBtn() {
    const btn = document.createElement('button');
    btn.textContent = "Order";

    return btn;
}