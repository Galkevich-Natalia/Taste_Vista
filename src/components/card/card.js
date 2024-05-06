import { getMenu } from "../../api/getApi";
import { addMenu } from "./createCards";
import { getCardDatabById } from "../../api/getApi";
import { setOrdersDataToStorage, getOrdersDataFromStorage } from "../../utils/localStorage";

export async function getCardsData(value) {
  try {
    const data = await getMenu();
    const nameCategory = value.toLowerCase();
    const arrCardsByCategory = data[0][nameCategory];

    deleteCardsByCategory();
    arrCardsByCategory.forEach((obj) => addMenu(obj, 'ordinary'));

  } catch (e) {
    console.error("error", e);
    throw e;
  }
}

function deleteCardsByCategory() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(item => item.remove());
}

function deleteStylesBtnsCategories() {
  const allBtnsMenu = document.querySelectorAll(".menu__item-button");
  allBtnsMenu.forEach(item => item.classList.remove("menu__item-button_active"));
}

function getMenuByCategory() {
  const itemMenu = document.querySelectorAll(".menu__item-button");
  Array.from(itemMenu).forEach(item => item.addEventListener("click", selectedCategory));
}

function selectedCategory(event) {
  const btnCategory = event.target;
  const dataCategory = event.target.textContent;

  deleteStylesBtnsCategories();
  btnCategory.classList.add("menu__item-button_active");
  getCardsData(dataCategory);
}

export function addDish(event) {
  if (event.target.classList.contains('card__btn')) {
    const cardId = +event.currentTarget.id;

    try {
      getCardDatabById(cardId)
        .then(dataOrder => {
          const dataCard = getOrdersDataFromStorage('Orders');

          if (dataCard === null) {
            dataOrder.count = 1;
            setOrdersDataToStorage([dataOrder]);
          } else {
            const dataFromLocalStorage = getOrdersDataFromStorage("Orders");
            const isObject = dataFromLocalStorage.find(item => item.id === dataOrder.id)

            if (isObject === undefined) {
              dataOrder.count = 1;
              dataFromLocalStorage.push(dataOrder);
            } else {
              dataFromLocalStorage.forEach(item => {
                if (item.id === dataOrder.id) {
                  item.count += 1;
                }
              });
            }
            setOrdersDataToStorage(dataFromLocalStorage);
          }
        })
    } catch (error) {
      throw error;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const navBtnsCategories = document.querySelectorAll(".menu__item-button");
  const defaultCategoryBtn = navBtnsCategories[0];
  defaultCategoryBtn.classList.add("menu__item-button_active");

  getCardsData("snacks");
  getMenuByCategory();
});