const targetElement = document.querySelector(".search-form");

export const drinkSearch = () => {
  targetElement.innerHTML = `
  <input class="search-bar" type="text" placeholder="What are you in the mood for?">
  <button id="search-button">Search</button>
  `;
};
