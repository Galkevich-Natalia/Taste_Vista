import { getOrdersDataFromStorage, setOrdersDataToStorage } from "../../utils/localStorage";
import { addOrders } from "./createOrderElements";
import { getFormatCurrency } from "../../utils/formatCurrency";

function addDishToOrdersPage() {
    const dataFromLocalStorage = getOrdersDataFromStorage('Orders');
    
    dataFromLocalStorage && dataFromLocalStorage.forEach((obj) => addOrders(obj));
}

function getTotalPrice() {
    const totalPriceValue = document.querySelector('.orders__footer-totalPrice-value');
    const dataFromLocalStorage = getOrdersDataFromStorage('Orders');
    const ordersMessage = document.querySelector('.orders__message');
    const ordersFooter = document.querySelector('.orders__footer');

    if (dataFromLocalStorage !== null && dataFromLocalStorage.length !== 0) {
        ordersMessage.style.display = 'none';
        ordersFooter.style.display = 'block';
        const totalPriceDishes = dataFromLocalStorage.reduce((acc, item) => acc + (item.price * item.count), 0);
        totalPriceValue.textContent = getFormatCurrency(totalPriceDishes);
    } else {
        ordersMessage.style.display = 'block';
        ordersFooter.style.display = 'none';
    }
}

export function incrementCounter(event) {
    if (event.target.classList.contains('order-card__btn-plus')) {
        const dataFromLocalStorage = getOrdersDataFromStorage('Orders');
        const orderCard = event.currentTarget;
        const orderCardId = +orderCard.id;
        const valueCount = orderCard.children[2].children[0].childNodes[1].children[0];
        const valueTotalPriceDish = orderCard.children[2].children[1].children[0];

        dataFromLocalStorage.forEach(item => {
            if (item.id === orderCardId) {
                item.count += 1;
                valueCount.textContent = item.count;
                setOrdersDataToStorage(dataFromLocalStorage);
                getTotalPriceForOneDish(valueTotalPriceDish, item);
                getTotalPrice();
            }
        });
    }
}

export function decrementCounter(event) {
    if (event.target.classList.contains('order-card__btn-minus')) {
        const dataFromLocalStorage = getOrdersDataFromStorage('Orders');
        const orderCard = event.currentTarget;
        const orderCardId = +orderCard.id;
        const valueCount = orderCard.children[2].children[0].children[1].children[0];
        const valueTotalPriceDish = orderCard.children[2].children[1].children[0];

        dataFromLocalStorage.forEach(item => {
            if (item.id === orderCardId) {
                if (item.count > 1) {
                    item.count -= 1;
                    valueCount.textContent = item.count;
                    setOrdersDataToStorage(dataFromLocalStorage);
                    getTotalPriceForOneDish(valueTotalPriceDish, item);
                    getTotalPrice();
                }
                else {
                    removeOrderCard(orderCard, orderCardId);
                    getTotalPrice();
                }
            }
        });
    }
}

function getTotalPriceForOneDish(valueTotalPriceDish, item) {
    const resultPriceDish = item.price * item.count;
    valueTotalPriceDish.textContent = getFormatCurrency(resultPriceDish);
}

function removeOrderCard(orderCard, orderCardId) {
    const dataFromLocalStorage = getOrdersDataFromStorage('Orders');
    orderCard.remove();
    const delElemFromLStorage = dataFromLocalStorage.filter(item => item.id !== orderCardId);
    setOrdersDataToStorage(delElemFromLStorage);
}

export function removeOrderCardByBtnCLose(event) {
    const orderCard = event.target.parentNode.parentNode;
    const orderCardId = +orderCard.id;

    removeOrderCard(orderCard, orderCardId);
    getTotalPrice();
}

function addMinHeightForOrders() {
    const orders = document.querySelector('.orders');
    let heightDisplay = window.innerHeight - 60 - 180;

    orders.style.minHeight = heightDisplay + 'px';
}

document.addEventListener("DOMContentLoaded", () => {
    addDishToOrdersPage();
    getTotalPrice();
    addMinHeightForOrders();
})