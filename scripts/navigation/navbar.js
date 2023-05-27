const targetElement = document.querySelector(".nav-bar");

export const navBar = () => {
  targetElement.innerHTML = `
    <div class="link" id="popular">Drinking Buddy</div>
    <div class="link" id="Gin">Gin</div>
    <div class="link" id="rum">Rum</div>
    <div class="link" id="tequila">Tequila</div>
    <div class="link" id="vodka">Vodka</div>
    <div class="link" id="whiskey">Whiskey</div>
`;
};
