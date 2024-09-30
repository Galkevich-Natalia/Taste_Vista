export function setOrdersDataToStorage(data) {
    localStorage.setItem('Orders', JSON.stringify(data));
}

export function getOrdersDataFromStorage(key) {
    const orders = localStorage.getItem(key);
    return JSON.parse(orders);
}

export function removeItemToStorage(itemName) {
    localStorage.removeItem(itemName);
}