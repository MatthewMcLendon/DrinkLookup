import { getPopularDrinks, getSearchedDrinks } from "./drinkDataProvider.js";
import { drinkList } from "./drinkList.js";

const eventHub = document.querySelector(".container");

export const drinkInitialList = () => {
  getPopularDrinks().then(drinkList);
};

export const drinkEventHandler = () => {
  eventHub.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Clicked!");
    if (event.target.id === "search-button") {
      console.log("Search clicked");
      const searchValue = document.querySelector(".search-bar").value;
      getSearchedDrinks(searchValue).then(drinkList);
    }
  });
};
