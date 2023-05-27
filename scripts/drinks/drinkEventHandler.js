import {
  getPopularDrinks,
  getSearchedDrinks,
  getDrinkByID,
} from "./drinkDataProvider.js";
import { drinkList } from "./drinkList.js";
import { drinkDetail } from "./drinkDetail.js";

const eventHub = document.querySelector(".container");

export const drinkInitialList = () => {
  getPopularDrinks().then(drinkList);
};

export const drinkEventHandler = () => {
  eventHub.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.id === "search-button") {
      const searchValue = document.querySelector(".search-bar").value;
      getSearchedDrinks(searchValue).then(drinkList);
    }

    if (event.target.className === "drink-card") {
      const drinkID = event.target.id;
      getDrinkByID(drinkID).then(drinkDetail);
    }
  });
};
