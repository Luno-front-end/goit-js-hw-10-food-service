import ingredients from "../templates/menu-ingredients.hbs"
import menuArrey from '../js/menu.json';

const ingredientsList = ingredientsListArray(menuArrey[1])

    function ingredientsListArray(menuArrey) {
    return ingredients(menuArrey)
}
console.log(ingredientsList)