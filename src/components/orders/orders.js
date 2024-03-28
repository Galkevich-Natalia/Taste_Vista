import { getOrdersDataToStorage } from "../../utils/localStorage";
import { addOrders } from "./createOrderElements";
import { getFormatCurrency } from "../../utils/formatCurrency";

function addDishToOrdersPage() {
    const dataFromLocalStorage = getOrdersDataToStorage('Orders');
    dataFromLocalStorage.forEach((obj) => addOrders(obj));
}

function getTotalPrice() {
    const totalPriceValue = document.querySelector('.orders__footer-totalPrice-title-value');
    const dataFromLocalStorage = getOrdersDataToStorage('Orders');
    const ordersMessage = document.querySelector('.orders__message');
    const ordersFooter = document.querySelector('.orders__footer');

    let resultPrice = 0;

    if(dataFromLocalStorage !== null) {
        ordersMessage.style.display = 'none';
        ordersFooter.style.display = 'block';
        resultPrice = dataFromLocalStorage.reduce((acc, item) => acc + item.price, 0.0);
        totalPriceValue.textContent = getFormatCurrency(resultPrice);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    addDishToOrdersPage();
    getTotalPrice();
})