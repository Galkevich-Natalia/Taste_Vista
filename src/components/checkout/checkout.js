import { getOrdersDataToStorage } from "../../utils/localStorage";
import { addItemToCheckoutList } from "./createCheckoutElements";
import { getFormatCurrency } from "../../utils/formatCurrency";
import { validateForm } from "../validation/validation";

function getDishesOnCheckoutPage() {
    const dataFromLocalStorage = getOrdersDataToStorage('Orders');
    dataFromLocalStorage.forEach((obj) => addItemToCheckoutList(obj));
}

function getCheckoutTotalPrice() {
    const totalPriceValue = document.querySelector('.checkout__block-totalPrice-value');
    const dataFromLocalStorage = getOrdersDataToStorage("Orders");
    const checkoutTotalPrice = dataFromLocalStorage.reduce((acc, item) => acc + (item.price * item.count), 0);
    totalPriceValue.textContent = getFormatCurrency(checkoutTotalPrice);
}

const checkoutBtnOrder = document.querySelector('.checkout__block-btn');
checkoutBtnOrder.addEventListener('click', validateForm);

document.addEventListener("DOMContentLoaded", () => {
    getDishesOnCheckoutPage();
    getCheckoutTotalPrice();
})