export function setOrdersDataToStorage(data) {
    localStorage.setItem('Orders', JSON.stringify(data));
}

export function getOrdersDataFromStorage() {
    const orders = localStorage.getItem('Orders');
    return JSON.parse(orders);
}

export function removeItemToStorage() {
    localStorage.removeItem('Orders');
}