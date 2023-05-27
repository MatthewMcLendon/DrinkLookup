import {
  getPopularDrinks,
  getSearchedDrinks,
  getDrinkByID,
  getDrinkByIngredient,
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

    if (
      event.target.className === "drink-name" ||
      event.target.className === "drink-preview"
    ) {
      const drinkID = event.target.parentElement.id;
      getDrinkByID(drinkID).then(drinkDetail);
    }

    if (event.target.className === "link") {
      if (event.target.id === "popular") {
        drinkInitialList();
      } else {
        const searchValue = event.target.id;
        getDrinkByIngredient(searchValue).then(drinkList);
      }
    }
  });
};
