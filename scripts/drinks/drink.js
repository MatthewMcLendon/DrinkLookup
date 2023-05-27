export const drinkComponent = (drink) => {
  return `
    <div class="drink-card" id="${drink.idDrink}">
      <img src="${drink.strDrinkThumb}/preview">
      <h2 class="drink-name">${drink.strDrink}</h2>
    </div>
    `;
};
