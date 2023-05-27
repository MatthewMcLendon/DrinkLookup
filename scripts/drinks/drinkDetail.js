import { useDrinks } from "./drinkDataProvider.js";

const targetElement = document.querySelector(".drink-list-container");

export const drinkDetail = () => {
  const drink = useDrinks();
  render(drink);
};

const render = (drink) => {
  targetElement.innerHTML = `
    <div class="drink-card" id="${drink[0].idDrink}">
        <h2 class="drink-name">${drink[0].strDrink}</h2>
        <img src="${drink[0].strDrinkThumb}">
        <p class="drink-description">The ${
          drink[0].strDrink
        } is a ${drink[0].strCategory.toLowerCase()} and served in a ${drink[0].strGlass.toLowerCase()}.</p>
        <ul class="drink-ingredient-list">${ingredientList(drink)}</ul>
        <p class="drink-instuctions">${drink[0].strInstructions}</p>
    </div>
    `;
};

const ingredientList = (drink) => {
  const ingredients = [];
  let element = "";

  for (let i = 1; i <= 15; i++) {
    let ingredient = drink[0][`strIngredient${i}`];
    let serving = drink[0][`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(serving + ingredient);
    }
  }

  ingredients.map((ingredient) => {
    element += `<li class="drink-ingredient">${ingredient}</li>`;
  });

  return element;
};
