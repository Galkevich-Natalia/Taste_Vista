import { getOrdersDataToStorage } from "../../utils/localStorage";
import { addItemToCheckoutList } from "./createCheckoutElements";


function getDishesOnCheckoutPage() {
    console.log("getDishesOnCheckoutPage");
    const dataFromLocalStorage = getOrdersDataToStorage('Orders');
    dataFromLocalStorage.forEach((obj) => addItemToCheckoutList(obj));
}

//getDishesOnCheckoutPage();

document.addEventListener("DOMContentLoaded", () => {
    getDishesOnCheckoutPage();
})