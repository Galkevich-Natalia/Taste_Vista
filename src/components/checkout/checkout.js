import { getOrdersDataToStorage } from "../../utils/localStorage";
import { addItemToCheckoutList } from "./createCheckoutElements";
import { getFormatCurrency } from "../../utils/formatCurrency";

function getDishesOnCheckoutPage() {
    console.log("getDishesOnCheckoutPage");
    const dataFromLocalStorage = getOrdersDataToStorage('Orders');
    dataFromLocalStorage.forEach((obj) => addItemToCheckoutList(obj));
}

//getDishesOnCheckoutPage();

function getCheckoutTotalPrice(data) {
    const totalPriceValue = document.querySelector('.checkout__block-totalPrice-value');
    const dataFromLocalStorage = getOrdersDataToStorage("Orders");
    const checkoutTotalPrice = dataFromLocalStorage.reduce((acc, item) => acc + (item.price * item.count), 0);
    totalPriceValue.textContent = getFormatCurrency(checkoutTotalPrice);
}

document.addEventListener("DOMContentLoaded", () => {
    getDishesOnCheckoutPage();
    getCheckoutTotalPrice();
})