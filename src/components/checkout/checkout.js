import { getOrdersDataFromStorage } from "../../utils/localStorage";
import { addItemToCheckoutList } from "./createCheckoutElements";
import { getFormatCurrency } from "../../utils/formatCurrency";
import { validateForm } from "../validation/validation";
import { removeItemToStorage } from "../../utils/localStorage";

const checkoutBtnOrder = document.querySelector('.checkout__block-btn');
const checkoutModalBtnClose = document.querySelector('.checkout__modal-btn');

checkoutBtnOrder.addEventListener('click', getOrder);
checkoutModalBtnClose.addEventListener('click', closeCheckoutModal);

function getDishesOnCheckoutPage() {
    const dataFromLocalStorage = getOrdersDataFromStorage('Orders');
    dataFromLocalStorage.forEach((obj) => addItemToCheckoutList(obj));
}

function getCheckoutTotalPrice() {
    const totalPriceValue = document.querySelector('.checkout__block-totalPrice-value');
    const dataFromLocalStorage = getOrdersDataFromStorage("Orders");
    const checkoutTotalPrice = dataFromLocalStorage.reduce((acc, item) => acc + (item.price * item.count), 0);
    totalPriceValue.textContent = getFormatCurrency(checkoutTotalPrice);
}

function getOrder() {
    if (validateForm()) {
        const checkoutModal = document.querySelector('.checkout__modal');
        const overlayCheckout = document.querySelector('.overlayCheckout');
        const body = document.querySelector('body');

        checkoutModal.style.display = 'block';
        overlayCheckout.style.display = 'block';
        body.classList.add('checkout__modal-open');
    }
}

export function closeCheckoutModal() {
    const checkoutModal = document.querySelector('.checkout__modal');
    const overlayCheckout = document.querySelector('.overlayCheckout');
    const body = document.querySelector('body');

    checkoutModal.remove();
    overlayCheckout.style.display = 'none';
    body.classList.remove('checkout__modal-open');

    window.location.href = "menu.html";
    removeItemToStorage('Orders');
}

document.addEventListener("DOMContentLoaded", () => {
    getDishesOnCheckoutPage();
    getCheckoutTotalPrice();
})