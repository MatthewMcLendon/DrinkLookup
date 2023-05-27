const targetElement = document.querySelector(".search-form");

export const drinkSearch = () => {
  targetElement.innerHTML = `
  <input class="search-bar" type="text" placeholder="Cocktail name">
  <button id="search-button">Search</button>
  `;
};
