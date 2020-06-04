import { elements } from "./base";
import Search from "../models/Search";

class Recipe {
    constructor(id, title, img, author) {
        this.id = id;
        this.title = title;
        this.img = img;
        this.author = author;
        this.score = this.getRandom(4, 5).toFixed(2);
    }
    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
}

function formatTitle(text) {
    const splitTitle = text.split(" ");

    const newTitle = [];

    splitTitle.reduce((acc, cur) => {
        if (acc + cur.length <= 17) {
            newTitle.push(cur);
        }
        return acc + cur.length;
    }, 0);

    return newTitle.join(" ") + "...";
}

export const renderRecipeCard = (recipeData) => {
    /*
image_url: "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg"
publisher: "101 Cookbooks"
publisher_url: "http://www.101cookbooks.com"
recipe_id: "47746"
social_rank: 100
source_url: "http://www.101cookbooks.com/archives/001199.html"
title: "Best Pizza Dough Ever"
*/
    const recipe = new Recipe(
        recipeData.recipe_id,
        recipeData.title,
        recipeData.image_url,
        recipeData.publisher
    );

    const markup = `
        <div class="card">
        <div class="card__cover">
            <img src="${recipe.img}" alt="${formatTitle(
        recipe.title
    )}" class="card__img">
            <button class="card__like">
                <svg class="icon">
                    <use href="./img/icons.svg#icon-heart-outlined"></use>
                </svg>
            </button>
        </div>
        <div class="card__text">
        <h3 class="card__title">${formatTitle(recipe.title)}</h3>
            <div class="card__stats">
                <p class="card__stat">
                    <svg class="icon">
                        <use href="./img/icons.svg#icon-star-full"></use>
                    </svg>
                    ${recipe.score}
                </p>
            </div>
            <a href="#${recipe.id}" class="btn">Get Recipe</a>
        </div>
    </div> 
    `;

    elements.resultsPanel.insertAdjacentHTML("beforeend", markup);
};

export const renderResults = (resultsList) => {
    resultsList.forEach(renderRecipeCard);
};

export const clearPanel = () => {
    elements.resultsPanel.innerHTML = "";
};

export const clearInput = () =>{
    elements.searchInput.value = '';
}