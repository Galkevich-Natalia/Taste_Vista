import { getMenu } from "../../api/getApi";
import { addMenu } from "./createCards";

export async function getCardsData(value) {
    try {
      const data = await getMenu();

      const nameCategory = value.toLowerCase();
      const arrCardsByCategory = data[0][nameCategory];

      arrCardsByCategory.forEach((obj) => addMenu(obj));

    } catch (e) {
      console.error("error", e);
      throw e;
    }
}

function getMenuByCategory() {
  const itemMenu = document.querySelectorAll(".menu__item button");
  Array.from(itemMenu).forEach(item => item.addEventListener("click", selectedCategory));
}

function selectedCategory(event) {
  const dataCategory = event.target.textContent;
  getCardsData(dataCategory);
}

document.addEventListener("DOMContentLoaded", () => {
  getCardsData();
  getMenuByCategory();
});