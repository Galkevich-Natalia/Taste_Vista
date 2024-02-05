import { getMenu } from "../../api/getApi";

async function getCardsData() {
    try {
      const data = await getMenu();
      console.log(data);
    //   data.forEach((obj) => );
    } catch (e) {
      console.error("error", e);
      throw e;
    }
}

document.addEventListener("DOMContentLoaded", getCardsData);