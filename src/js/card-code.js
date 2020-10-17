import cardMenu from '../templates/shop-card.hbs'
import menuArrey from '../js/menu.json';

const cardsMarcup = createMenuCards(menuArrey[1])

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

function createMenuCards(menuArrey) {
    return cardMenu(menuArrey)
}
console.log(cardsMarcup)