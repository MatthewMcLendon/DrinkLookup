import settings from "../.settings.js";

let drinks = [];

export const useDrinks = () => {
  return drinks;
};

export const getPopularDrinks = () => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/${settings.APIkey}/filter.php?a=Alcoholic`
  )
    .then((response) => response.json())
    .then((parsedDrinks) => {
      drinks = parsedDrinks.drinks;
    });
};

export const getSearchedDrinks = (searchValue) => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/${settings.APIkey}/search.php?s=${searchValue}`
  )
    .then((response) => response.json())
    .then((parsedDrinks) => {
      drinks = parsedDrinks.drinks;
    });
};

export const getDrinkByID = (id) => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/${settings.APIkey}/lookup.php?i=${id}`
  )
    .then((response) => response.json())
    .then((parsedDrinks) => {
      drinks = parsedDrinks.drinks;
    });
};
