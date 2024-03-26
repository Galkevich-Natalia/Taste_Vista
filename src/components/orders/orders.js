import { getOrdersDataToStorage } from "../../utils/localStorage";
import { addOrders } from "./createOrderElements";

function addDishToOrdersPage() {
    const dataFromLocalStorage = getOrdersDataToStorage('Orders');
    dataFromLocalStorage.forEach((obj) => addOrders(obj));
}

addDishToOrdersPage();