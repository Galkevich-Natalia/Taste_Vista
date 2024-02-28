import { getMenu } from "../../api/getApi";
import { addMenu } from "./createCards";
import { getCardDatabById } from "../../api/getApi";

export let cardsData = [];

export async function getCardsData(value) {

  try {
    const data = await getMenu();

    // cardsData = [...data];
    // console.log(cardsData);

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
  
  deleteStylesBtnsCategories();

  const btnCategory = event.target;
  // console.log(event);

  btnCategory.classList.add("menu__item-button_active");

  const dataCategory = event.target.textContent;
  
  getCardsData(dataCategory);
}

export function addModal(event) {
  // console.log(typeof event.currentTarget.id);
  // console.log("cardsData");

  // addMenu(item, 'modal');
  const cardId = +event.currentTarget.id;
  console.log(cardId)

  try {
    getCardDatabById(cardId)
    .then(cardData => {
      console.log(cardData)
      addMenu(cardData, 'modal');
      
      // Здесь вы можете выполнить любую дополнительную обработку данных
      // и использовать их по вашему усмотрению.
    });
    
  } catch(error) {
    throw error;
  }
}

document.addEventListener("DOMContentLoaded", () => {

  const navBtnsCategories = document.querySelectorAll(".menu__item-button");

  const defaultCategoryBtn = navBtnsCategories[0];

  defaultCategoryBtn.classList.add("menu__item-button_active");

  getCardsData("snacks");
  getMenuByCategory();
});