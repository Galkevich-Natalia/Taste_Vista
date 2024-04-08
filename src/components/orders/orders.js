import { getOrdersDataToStorage, setOrdersDataToStorage } from "../../utils/localStorage";
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

    if (dataFromLocalStorage !== null && dataFromLocalStorage.length !== 0) {
        ordersMessage.style.display = 'none';
        ordersFooter.style.display = 'block';
        const resultPrice = dataFromLocalStorage.reduce((acc, item) => acc + item.price, 0);
        totalPriceValue.textContent = getFormatCurrency(resultPrice);
    } else {
        ordersMessage.style.display = 'block';
        ordersFooter.style.display = 'none';
    }
}

export function incrementCounter(event) {
    const dataFromLocalStorage = getOrdersDataToStorage('Orders');
    const eventBtn = event.target;
    const valueCount = eventBtn.parentNode.parentNode.childNodes[1].children[0];

    if (event.target.classList.contains('order-card__btn-plus')) {
        const orderCardId = +event.currentTarget.id;
        dataFromLocalStorage.forEach(item => {
            if (item.id === orderCardId) {
                item.count += 1;
                valueCount.textContent = item.count;
                setOrdersDataToStorage(dataFromLocalStorage)
            }
        });
    }
}

export function decrementCounter(event) {
    const dataFromLocalStorage = getOrdersDataToStorage('Orders');
    const eventBtn = event.target;
    const orderCard = eventBtn.parentNode.parentNode.parentNode.parentNode;
    const valueCount = eventBtn.parentNode.parentNode.childNodes[1].children[0];

    if (event.target.classList.contains('order-card__btn-minus')) {
        const orderCardId = +event.currentTarget.id;
        dataFromLocalStorage.forEach(item => {
            if (item.id === orderCardId) {
                if (item.count > 1) {
                    item.count -= 1;
                    valueCount.textContent = item.count;
                    setOrdersDataToStorage(dataFromLocalStorage)
                }
                else {
                    removeOrderCard(orderCard, orderCardId);
                    getTotalPrice();
                }
            }
        });
    }
}

function removeOrderCard(orderCard, orderCardId) {
    const dataFromLocalStorage = getOrdersDataToStorage('Orders');
    orderCard.remove();
    const delElemFromLStorage = dataFromLocalStorage.filter(item => item.id !== orderCardId);
    setOrdersDataToStorage(delElemFromLStorage);
}

document.addEventListener("DOMContentLoaded", () => {
    addDishToOrdersPage();
    getTotalPrice();
})