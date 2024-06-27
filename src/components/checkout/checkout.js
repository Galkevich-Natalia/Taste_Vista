import { getOrdersDataFromStorage } from "../../utils/localStorage";
import { addItemToCheckoutList } from "./createCheckoutElements";
import { getFormatCurrency } from "../../utils/formatCurrency";
import { validateForm } from "../validation/validation";
import { removeItemToStorage } from "../../utils/localStorage";

const checkoutBtnOrder = document.querySelector('.checkout__block-btn');
const checkoutModalBtnClose = document.querySelector('.cross_checkout-modal');

checkoutBtnOrder.addEventListener('click', getOrder);
checkoutModalBtnClose.addEventListener('click', closeCheckoutModal);

function getDishesOnCheckoutPage() {
    const dataFromLocalStorage = getOrdersDataFromStorage('Orders');
    dataFromLocalStorage.forEach((obj) => 
    addItemToCheckoutList(obj));

}

function getCheckoutTotalPrice() {
    const totalPriceValue = document.querySelector('.checkout__block-totalPrice-value');
    const dataFromLocalStorage = getOrdersDataFromStorage("Orders");
    const checkoutTotalPrice = dataFromLocalStorage.reduce((acc, item) => acc + (item.price * item.count), 0);
    totalPriceValue.textContent = getFormatCurrency(checkoutTotalPrice);
}

function getOrder() {
    const validateFormCall = validateForm();

    if (validateFormCall) {
        const checkoutModal = document.querySelector('.checkout__modal');
        const overlay = document.querySelector('.overlay');
        const body = document.querySelector('body');

        checkoutModal.style.display = 'block';
        overlay.style.display = 'block';
        overlay.addEventListener('click', closeCheckoutModal);
        body.classList.add('hideScroll');
    }
}

export function closeCheckoutModal() {
    window.location.href = "menu.html";
    removeItemToStorage('Orders');
}

document.addEventListener("DOMContentLoaded", () => {
    getDishesOnCheckoutPage();
    getCheckoutTotalPrice();
})