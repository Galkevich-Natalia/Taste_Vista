import { getMenu } from "../../api/getApi";
import { addMenu } from "./createCards";
import { getCardDatabById } from "../../api/getApi";
import { closeModalByClickOutside } from "./closeModal";

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

export function addModal(event) {
  const cardId = +event.currentTarget.id;
  const overlay = document.querySelector('.overlay');

  try {
    getCardDatabById(cardId)
    .then(cardData => {
      addMenu(cardData, 'modal');
      overlay.style.display = 'block';
      overlay.addEventListener('click', closeModalByClickOutside);
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