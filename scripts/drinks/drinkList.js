import { drinkComponent } from "./drink.js";
import { useDrinks } from "./drinkDataProvider.js";

const contentTarget = document.querySelector(".drink-list-container");

export const drinkList = () => {
  const drinks = useDrinks();
  render(drinks);
};

const render = (drinks) => {
  contentTarget.innerHTML = `${drinks
    .map((drink) => {
      return drinkComponent(drink);
    })
    .join("")}`;
};
