import { getMenu } from "../../api/getApi";
import { addMenu } from "./createCards";

async function getCardsData() {
    try {
      const data = await getMenu();
      console.log(data)
    //   console.log(data[0].drinks);
    const arr = data[0].drinks;
    arr.forEach((obj) => addMenu(obj));
    } catch (e) {
      console.error("error", e);
      throw e;
    }
}

document.addEventListener("DOMContentLoaded", getCardsData);