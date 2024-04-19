import { getFormatCurrency } from './../../utils/formatCurrency';

const checkoutList = document.querySelector('.checkout__block-list');

export function addItemToCheckoutList(data) {
    checkoutList.append(createCheckoutListItem(data));
}

function createCheckoutListItem(data) {
    const checkoutListItem = document.createElement('li');
    checkoutListItem.classList.add('checkout__block-list-item');
    checkoutListItem.append(createCheckoutItemName(data), createCheckoutItemCount(data), createCheckoutItemTotalPrice(data));

    return checkoutListItem;
}

function createCheckoutItemName(data) {
    const checkoutItemName = document.createElement('h5');
    checkoutItemName.classList.add('checkout__block-list-item-name');
    checkoutItemName.textContent = data.name;

    return checkoutItemName;
}

function createCheckoutItemCount(data) {
    const checkoutItemCount = document.createElement('h5');
    checkoutItemCount.classList.add('checkout__block-list-item-count');
    checkoutItemCount.textContent = data.count;

    return checkoutItemCount;
}

function createCheckoutItemTotalPrice(data) {
    const checkoutItemTotalPrice = document.createElement('h5');
    checkoutItemTotalPrice.classList.add('checkout__block-list-item-price');
    checkoutItemTotalPrice.textContent = getFormatCurrency(data.price * data.count);

    return checkoutItemTotalPrice;
}