import { useDrinks, getPopularDrinks } from "./drinkDataProvider.js";
import { drinkList } from "./drinkList.js";

const eventHub = document.querySelector(".container");

export async function drinkInitialList() {
  getPopularDrinks().then(drinkList);
}

export const drinkEventHandler = () => {
  eventHub.addEventListener("click", (event) => {
    console.log("click event on container");
  });
};
