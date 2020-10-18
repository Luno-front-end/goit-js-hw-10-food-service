import cardMenu from '../templates/shop-card.hbs';
import menuArrey from '../js/menu.json';

const cardsMarcup = createMenuCards(menuArrey);
const menuEl = document.querySelector('.js-menu');

function createMenuCards(menuArrey) {
  return cardMenu(menuArrey);
}
menuEl.insertAdjacentHTML('beforeend', cardsMarcup);
