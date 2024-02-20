import { getMenu } from "../../api/getApi";
import { addMenu } from "./createCards";

export async function getCardsData(value) {

  try {
    const data = await getMenu();

    const nameCategory = value.toLowerCase();
    const arrCardsByCategory = data[0][nameCategory];

    deleteCardsByCategory();
    arrCardsByCategory.forEach((obj) => addMenu(obj));

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

document.addEventListener("DOMContentLoaded", () => {

  const navBtnsCategories = document.querySelectorAll(".menu__item-button");

  const defaultCategoryBtn = navBtnsCategories[0];

  defaultCategoryBtn.classList.add("menu__item-button_active");

  getCardsData("snacks");
  getMenuByCategory();
});