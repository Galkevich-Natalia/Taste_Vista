import { getOrdersDataToStorage } from "../../utils/localStorage";
import { addOrders } from "./createOrderElements";
import { getFormatCurrency } from "../../utils/formatCurrency";

function addDishToOrdersPage() {
    const dataFromLocalStorage = getOrdersDataToStorage('Orders');
    dataFromLocalStorage.forEach((obj) => addOrders(obj));
    getTotalPrice();
}

addDishToOrdersPage();

function getTotalPrice() {
    const totalPrice = document.querySelector('.orders__totalPrice');
    const totalPriceValue = document.querySelector('.orders__totalPrice-title-value');
    const dataFromLocalStorage = getOrdersDataToStorage('Orders');
    const ordersMessage = document.querySelector('.orders__message');
    const btnOrders = document.querySelector('.orders__btn');

    let resultPrice = 0;

    if(dataFromLocalStorage !== null) {
        ordersMessage.style.display = 'none';
        totalPrice.style.visibility = 'visible';
        btnOrders.style.display = 'block';

        dataFromLocalStorage.forEach((item) => resultPrice += item.price);
        totalPriceValue.textContent = getFormatCurrency(resultPrice);
    }
}