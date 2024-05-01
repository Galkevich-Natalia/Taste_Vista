export function setOrdersDataToStorage(data) {
    localStorage.setItem('Orders', JSON.stringify(data));
}

export function getOrdersDataToStorage() {
    const orders = localStorage.getItem('Orders');
    return JSON.parse(orders);
}

export function removeItemToStorage() {
    localStorage.removeItem('Orders');
}